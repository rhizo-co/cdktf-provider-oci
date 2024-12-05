# `dataOciFleetAppsManagementRunbook` Submodule <a name="`dataOciFleetAppsManagementRunbook` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFleetAppsManagementRunbook <a name="DataOciFleetAppsManagementRunbook" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbook oci_fleet_apps_management_runbook}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementRunbook(Construct Scope, string Id, DataOciFleetAppsManagementRunbookConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig">DataOciFleetAppsManagementRunbookConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig">DataOciFleetAppsManagementRunbookConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFleetAppsManagementRunbook resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFleetAppsManagementRunbook.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFleetAppsManagementRunbook.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFleetAppsManagementRunbook.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFleetAppsManagementRunbook.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciFleetAppsManagementRunbook resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciFleetAppsManagementRunbook to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciFleetAppsManagementRunbook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbook#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFleetAppsManagementRunbook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.associations">Associations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList">DataOciFleetAppsManagementRunbookAssociationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.estimatedTime">EstimatedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.isDefault">IsDefault</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.operation">Operation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.osType">OsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.platform">Platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.resourceRegion">ResourceRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.runbookRelevance">RunbookRelevance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.runbookIdInput">RunbookIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.runbookId">RunbookId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Associations`<sup>Required</sup> <a name="Associations" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.associations"></a>

```csharp
public DataOciFleetAppsManagementRunbookAssociationsList Associations { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList">DataOciFleetAppsManagementRunbookAssociationsList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EstimatedTime`<sup>Required</sup> <a name="EstimatedTime" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.estimatedTime"></a>

```csharp
public string EstimatedTime { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.isDefault"></a>

```csharp
public IResolvable IsDefault { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `Operation`<sup>Required</sup> <a name="Operation" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.operation"></a>

```csharp
public string Operation { get; }
```

- *Type:* string

---

##### `OsType`<sup>Required</sup> <a name="OsType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.osType"></a>

```csharp
public string OsType { get; }
```

- *Type:* string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.platform"></a>

```csharp
public string Platform { get; }
```

- *Type:* string

---

##### `ResourceRegion`<sup>Required</sup> <a name="ResourceRegion" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.resourceRegion"></a>

```csharp
public string ResourceRegion { get; }
```

- *Type:* string

---

##### `RunbookRelevance`<sup>Required</sup> <a name="RunbookRelevance" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.runbookRelevance"></a>

```csharp
public string RunbookRelevance { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `RunbookIdInput`<sup>Optional</sup> <a name="RunbookIdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.runbookIdInput"></a>

```csharp
public string RunbookIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `RunbookId`<sup>Required</sup> <a name="RunbookId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.runbookId"></a>

```csharp
public string RunbookId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbook.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFleetAppsManagementRunbookAssociations <a name="DataOciFleetAppsManagementRunbookAssociations" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementRunbookAssociations {

};
```


### DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetails <a name="DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetails {

};
```


### DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflow <a name="DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflow" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflow {

};
```


### DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowSteps <a name="DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowSteps" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowSteps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowSteps.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowSteps {

};
```


### DataOciFleetAppsManagementRunbookAssociationsGroups <a name="DataOciFleetAppsManagementRunbookAssociationsGroups" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementRunbookAssociationsGroups {

};
```


### DataOciFleetAppsManagementRunbookAssociationsGroupsProperties <a name="DataOciFleetAppsManagementRunbookAssociationsGroupsProperties" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementRunbookAssociationsGroupsProperties {

};
```


### DataOciFleetAppsManagementRunbookAssociationsTasks <a name="DataOciFleetAppsManagementRunbookAssociationsTasks" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementRunbookAssociationsTasks {

};
```


### DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappings <a name="DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappings" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappings {

};
```


### DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetails <a name="DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetails {

};
```


### DataOciFleetAppsManagementRunbookAssociationsTasksStepProperties <a name="DataOciFleetAppsManagementRunbookAssociationsTasksStepProperties" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementRunbookAssociationsTasksStepProperties {

};
```


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetails <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetails {

};
```


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetails <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetails {

};
```


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContent <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContent" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContent"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContent.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContent {

};
```


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariables <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariables" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariables.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariables {

};
```


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables {

};
```


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsProperties <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsProperties" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsProperties {

};
```


### DataOciFleetAppsManagementRunbookConfig <a name="DataOciFleetAppsManagementRunbookConfig" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementRunbookConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string RunbookId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.runbookId">RunbookId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbook#runbook_id DataOciFleetAppsManagementRunbook#runbook_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbook#id DataOciFleetAppsManagementRunbook#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `RunbookId`<sup>Required</sup> <a name="RunbookId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.runbookId"></a>

```csharp
public string RunbookId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbook#runbook_id DataOciFleetAppsManagementRunbook#runbook_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_runbook#id DataOciFleetAppsManagementRunbook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList <a name="DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.get"></a>

```csharp
private DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference <a name="DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.property.workflow">Workflow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList">DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetails">DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Workflow`<sup>Required</sup> <a name="Workflow" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.property.workflow"></a>

```csharp
public DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList Workflow { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList">DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetails">DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetails</a>

---


### DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList <a name="DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.get"></a>

```csharp
private DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference <a name="DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.groupName">GroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.steps">Steps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList">DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflow">DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.groupName"></a>

```csharp
public string GroupName { get; }
```

- *Type:* string

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.steps"></a>

```csharp
public DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList Steps { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList">DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflow InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflow">DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflow</a>

---


### DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList <a name="DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.get"></a>

```csharp
private DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference <a name="DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.groupName">GroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.stepName">StepName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.steps">Steps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowSteps">DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowSteps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GroupName`<sup>Required</sup> <a name="GroupName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.groupName"></a>

```csharp
public string GroupName { get; }
```

- *Type:* string

---

##### `StepName`<sup>Required</sup> <a name="StepName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.stepName"></a>

```csharp
public string StepName { get; }
```

- *Type:* string

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.steps"></a>

```csharp
public string[] Steps { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowStepsOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowSteps InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowSteps">DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsWorkflowSteps</a>

---


### DataOciFleetAppsManagementRunbookAssociationsGroupsList <a name="DataOciFleetAppsManagementRunbookAssociationsGroupsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementRunbookAssociationsGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.get"></a>

```csharp
private DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference <a name="DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.property.properties">Properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList">DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroups">DataOciFleetAppsManagementRunbookAssociationsGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.property.properties"></a>

```csharp
public DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList Properties { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList">DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetAppsManagementRunbookAssociationsGroups InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroups">DataOciFleetAppsManagementRunbookAssociationsGroups</a>

---


### DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList <a name="DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.get"></a>

```csharp
private DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference <a name="DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.property.actionOnFailure">ActionOnFailure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.property.runOn">RunOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsProperties">DataOciFleetAppsManagementRunbookAssociationsGroupsProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionOnFailure`<sup>Required</sup> <a name="ActionOnFailure" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.property.actionOnFailure"></a>

```csharp
public string ActionOnFailure { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `RunOn`<sup>Required</sup> <a name="RunOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.property.runOn"></a>

```csharp
public string RunOn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsPropertiesOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetAppsManagementRunbookAssociationsGroupsProperties InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsProperties">DataOciFleetAppsManagementRunbookAssociationsGroupsProperties</a>

---


### DataOciFleetAppsManagementRunbookAssociationsList <a name="DataOciFleetAppsManagementRunbookAssociationsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementRunbookAssociationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.get"></a>

```csharp
private DataOciFleetAppsManagementRunbookAssociationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetAppsManagementRunbookAssociationsOutputReference <a name="DataOciFleetAppsManagementRunbookAssociationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementRunbookAssociationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.property.executionWorkflowDetails">ExecutionWorkflowDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList">DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.property.groups">Groups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList">DataOciFleetAppsManagementRunbookAssociationsGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.property.tasks">Tasks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList">DataOciFleetAppsManagementRunbookAssociationsTasksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociations">DataOciFleetAppsManagementRunbookAssociations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExecutionWorkflowDetails`<sup>Required</sup> <a name="ExecutionWorkflowDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.property.executionWorkflowDetails"></a>

```csharp
public DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList ExecutionWorkflowDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList">DataOciFleetAppsManagementRunbookAssociationsExecutionWorkflowDetailsList</a>

---

##### `Groups`<sup>Required</sup> <a name="Groups" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.property.groups"></a>

```csharp
public DataOciFleetAppsManagementRunbookAssociationsGroupsList Groups { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsGroupsList">DataOciFleetAppsManagementRunbookAssociationsGroupsList</a>

---

##### `Tasks`<sup>Required</sup> <a name="Tasks" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.property.tasks"></a>

```csharp
public DataOciFleetAppsManagementRunbookAssociationsTasksList Tasks { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList">DataOciFleetAppsManagementRunbookAssociationsTasksList</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetAppsManagementRunbookAssociations InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociations">DataOciFleetAppsManagementRunbookAssociations</a>

---


### DataOciFleetAppsManagementRunbookAssociationsTasksList <a name="DataOciFleetAppsManagementRunbookAssociationsTasksList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementRunbookAssociationsTasksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.get"></a>

```csharp
private DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference <a name="DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.property.associationType">AssociationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.property.outputVariableMappings">OutputVariableMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList">DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.property.stepName">StepName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.property.stepProperties">StepProperties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList">DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.property.taskRecordDetails">TaskRecordDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasks">DataOciFleetAppsManagementRunbookAssociationsTasks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AssociationType`<sup>Required</sup> <a name="AssociationType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.property.associationType"></a>

```csharp
public string AssociationType { get; }
```

- *Type:* string

---

##### `OutputVariableMappings`<sup>Required</sup> <a name="OutputVariableMappings" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.property.outputVariableMappings"></a>

```csharp
public DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList OutputVariableMappings { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList">DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList</a>

---

##### `StepName`<sup>Required</sup> <a name="StepName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.property.stepName"></a>

```csharp
public string StepName { get; }
```

- *Type:* string

---

##### `StepProperties`<sup>Required</sup> <a name="StepProperties" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.property.stepProperties"></a>

```csharp
public DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList StepProperties { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList">DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList</a>

---

##### `TaskRecordDetails`<sup>Required</sup> <a name="TaskRecordDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.property.taskRecordDetails"></a>

```csharp
public DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList TaskRecordDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetAppsManagementRunbookAssociationsTasks InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasks">DataOciFleetAppsManagementRunbookAssociationsTasks</a>

---


### DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList <a name="DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.get"></a>

```csharp
private DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference <a name="DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.property.outputVariableDetails">OutputVariableDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList">DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappings">DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OutputVariableDetails`<sup>Required</sup> <a name="OutputVariableDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.property.outputVariableDetails"></a>

```csharp
public DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList OutputVariableDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList">DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappings InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappings">DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappings</a>

---


### DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList <a name="DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.get"></a>

```csharp
private DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference <a name="DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.property.outputVariableName">OutputVariableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.property.stepName">StepName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetails">DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OutputVariableName`<sup>Required</sup> <a name="OutputVariableName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.property.outputVariableName"></a>

```csharp
public string OutputVariableName { get; }
```

- *Type:* string

---

##### `StepName`<sup>Required</sup> <a name="StepName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.property.stepName"></a>

```csharp
public string StepName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetails">DataOciFleetAppsManagementRunbookAssociationsTasksOutputVariableMappingsOutputVariableDetails</a>

---


### DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList <a name="DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.get"></a>

```csharp
private DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference <a name="DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.property.actionOnFailure">ActionOnFailure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.property.condition">Condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.property.runOn">RunOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepProperties">DataOciFleetAppsManagementRunbookAssociationsTasksStepProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionOnFailure`<sup>Required</sup> <a name="ActionOnFailure" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.property.actionOnFailure"></a>

```csharp
public string ActionOnFailure { get; }
```

- *Type:* string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.property.condition"></a>

```csharp
public string Condition { get; }
```

- *Type:* string

---

##### `RunOn`<sup>Required</sup> <a name="RunOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.property.runOn"></a>

```csharp
public string RunOn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepPropertiesOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetAppsManagementRunbookAssociationsTasksStepProperties InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksStepProperties">DataOciFleetAppsManagementRunbookAssociationsTasksStepProperties</a>

---


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.get"></a>

```csharp
private DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.checksum">Checksum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.object">Object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.sourceType">SourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContent">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Checksum`<sup>Required</sup> <a name="Checksum" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.checksum"></a>

```csharp
public string Checksum { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.object"></a>

```csharp
public string Object { get; }
```

- *Type:* string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.sourceType"></a>

```csharp
public string SourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContent InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContent">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContent</a>

---


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.get"></a>

```csharp
private DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.command">Command</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.content">Content</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.executionType">ExecutionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.variables">Variables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetails">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Command`<sup>Required</sup> <a name="Command" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.command"></a>

```csharp
public string Command { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.content"></a>

```csharp
public DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList Content { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsContentList</a>

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `ExecutionType`<sup>Required</sup> <a name="ExecutionType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.executionType"></a>

```csharp
public string ExecutionType { get; }
```

- *Type:* string

---

##### `Variables`<sup>Required</sup> <a name="Variables" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.variables"></a>

```csharp
public DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList Variables { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetails">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetails</a>

---


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.get"></a>

```csharp
private DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariables</a>

---


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.get"></a>

```csharp
private DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.inputVariables">InputVariables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.outputVariables">OutputVariables</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariables">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InputVariables`<sup>Required</sup> <a name="InputVariables" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.inputVariables"></a>

```csharp
public DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList InputVariables { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesInputVariablesList</a>

---

##### `OutputVariables`<sup>Required</sup> <a name="OutputVariables" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.outputVariables"></a>

```csharp
public string[] OutputVariables { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariables InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariables">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsVariables</a>

---


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.get"></a>

```csharp
private DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.executionDetails">ExecutionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.isCopyToLibraryEnabled">IsCopyToLibraryEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.osType">OsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.platform">Platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.properties">Properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.taskRecordId">TaskRecordId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetails">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ExecutionDetails`<sup>Required</sup> <a name="ExecutionDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.executionDetails"></a>

```csharp
public DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList ExecutionDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsExecutionDetailsList</a>

---

##### `IsCopyToLibraryEnabled`<sup>Required</sup> <a name="IsCopyToLibraryEnabled" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.isCopyToLibraryEnabled"></a>

```csharp
public IResolvable IsCopyToLibraryEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OsType`<sup>Required</sup> <a name="OsType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.osType"></a>

```csharp
public string OsType { get; }
```

- *Type:* string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.platform"></a>

```csharp
public string Platform { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.properties"></a>

```csharp
public DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList Properties { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList</a>

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `TaskRecordId`<sup>Required</sup> <a name="TaskRecordId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.taskRecordId"></a>

```csharp
public string TaskRecordId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetails">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetails</a>

---


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.get"></a>

```csharp
private DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference <a name="DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.property.numRetries">NumRetries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsProperties">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NumRetries`<sup>Required</sup> <a name="NumRetries" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.property.numRetries"></a>

```csharp
public double NumRetries { get; }
```

- *Type:* double

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.property.timeoutInSeconds"></a>

```csharp
public double TimeoutInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsPropertiesOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsProperties InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementRunbook.DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsProperties">DataOciFleetAppsManagementRunbookAssociationsTasksTaskRecordDetailsProperties</a>

---



