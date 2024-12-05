# `dataOciFleetAppsManagementSchedulerDefinition` Submodule <a name="`dataOciFleetAppsManagementSchedulerDefinition` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFleetAppsManagementSchedulerDefinition <a name="DataOciFleetAppsManagementSchedulerDefinition" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition oci_fleet_apps_management_scheduler_definition}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinition(Construct Scope, string Id, DataOciFleetAppsManagementSchedulerDefinitionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig">DataOciFleetAppsManagementSchedulerDefinitionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig">DataOciFleetAppsManagementSchedulerDefinitionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFleetAppsManagementSchedulerDefinition resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFleetAppsManagementSchedulerDefinition.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFleetAppsManagementSchedulerDefinition.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFleetAppsManagementSchedulerDefinition.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFleetAppsManagementSchedulerDefinition.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciFleetAppsManagementSchedulerDefinition resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciFleetAppsManagementSchedulerDefinition to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciFleetAppsManagementSchedulerDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFleetAppsManagementSchedulerDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.actionGroups">ActionGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList">DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.actionGroupTypes">ActionGroupTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.activityInitiationCutOff">ActivityInitiationCutOff</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.applicationTypes">ApplicationTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.countOfAffectedActionGroups">CountOfAffectedActionGroups</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.countOfAffectedResources">CountOfAffectedResources</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.countOfAffectedTargets">CountOfAffectedTargets</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.lifecycleOperations">LifecycleOperations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.products">Products</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.resourceRegion">ResourceRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.runBooks">RunBooks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList">DataOciFleetAppsManagementSchedulerDefinitionRunBooksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.schedule">Schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList">DataOciFleetAppsManagementSchedulerDefinitionScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.timeOfNextRun">TimeOfNextRun</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.schedulerDefinitionIdInput">SchedulerDefinitionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.schedulerDefinitionId">SchedulerDefinitionId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ActionGroups`<sup>Required</sup> <a name="ActionGroups" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.actionGroups"></a>

```csharp
public DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList ActionGroups { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList">DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList</a>

---

##### `ActionGroupTypes`<sup>Required</sup> <a name="ActionGroupTypes" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.actionGroupTypes"></a>

```csharp
public string[] ActionGroupTypes { get; }
```

- *Type:* string[]

---

##### `ActivityInitiationCutOff`<sup>Required</sup> <a name="ActivityInitiationCutOff" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.activityInitiationCutOff"></a>

```csharp
public double ActivityInitiationCutOff { get; }
```

- *Type:* double

---

##### `ApplicationTypes`<sup>Required</sup> <a name="ApplicationTypes" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.applicationTypes"></a>

```csharp
public string[] ApplicationTypes { get; }
```

- *Type:* string[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `CountOfAffectedActionGroups`<sup>Required</sup> <a name="CountOfAffectedActionGroups" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.countOfAffectedActionGroups"></a>

```csharp
public double CountOfAffectedActionGroups { get; }
```

- *Type:* double

---

##### `CountOfAffectedResources`<sup>Required</sup> <a name="CountOfAffectedResources" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.countOfAffectedResources"></a>

```csharp
public double CountOfAffectedResources { get; }
```

- *Type:* double

---

##### `CountOfAffectedTargets`<sup>Required</sup> <a name="CountOfAffectedTargets" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.countOfAffectedTargets"></a>

```csharp
public double CountOfAffectedTargets { get; }
```

- *Type:* double

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `LifecycleOperations`<sup>Required</sup> <a name="LifecycleOperations" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.lifecycleOperations"></a>

```csharp
public string[] LifecycleOperations { get; }
```

- *Type:* string[]

---

##### `Products`<sup>Required</sup> <a name="Products" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.products"></a>

```csharp
public string[] Products { get; }
```

- *Type:* string[]

---

##### `ResourceRegion`<sup>Required</sup> <a name="ResourceRegion" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.resourceRegion"></a>

```csharp
public string ResourceRegion { get; }
```

- *Type:* string

---

##### `RunBooks`<sup>Required</sup> <a name="RunBooks" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.runBooks"></a>

```csharp
public DataOciFleetAppsManagementSchedulerDefinitionRunBooksList RunBooks { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList">DataOciFleetAppsManagementSchedulerDefinitionRunBooksList</a>

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.schedule"></a>

```csharp
public DataOciFleetAppsManagementSchedulerDefinitionScheduleList Schedule { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList">DataOciFleetAppsManagementSchedulerDefinitionScheduleList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeOfNextRun`<sup>Required</sup> <a name="TimeOfNextRun" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.timeOfNextRun"></a>

```csharp
public string TimeOfNextRun { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `SchedulerDefinitionIdInput`<sup>Optional</sup> <a name="SchedulerDefinitionIdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.schedulerDefinitionIdInput"></a>

```csharp
public string SchedulerDefinitionIdInput { get; }
```

- *Type:* string

---

##### `SchedulerDefinitionId`<sup>Required</sup> <a name="SchedulerDefinitionId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.schedulerDefinitionId"></a>

```csharp
public string SchedulerDefinitionId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinition.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFleetAppsManagementSchedulerDefinitionActionGroups <a name="DataOciFleetAppsManagementSchedulerDefinitionActionGroups" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionActionGroups {

};
```


### DataOciFleetAppsManagementSchedulerDefinitionConfig <a name="DataOciFleetAppsManagementSchedulerDefinitionConfig" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string SchedulerDefinitionId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig.property.schedulerDefinitionId">SchedulerDefinitionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition#scheduler_definition_id DataOciFleetAppsManagementSchedulerDefinition#scheduler_definition_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `SchedulerDefinitionId`<sup>Required</sup> <a name="SchedulerDefinitionId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionConfig.property.schedulerDefinitionId"></a>

```csharp
public string SchedulerDefinitionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_scheduler_definition#scheduler_definition_id DataOciFleetAppsManagementSchedulerDefinition#scheduler_definition_id}.

---

### DataOciFleetAppsManagementSchedulerDefinitionRunBooks <a name="DataOciFleetAppsManagementSchedulerDefinitionRunBooks" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionRunBooks {

};
```


### DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParameters <a name="DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParameters" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParameters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParameters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParameters {

};
```


### DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments <a name="DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments {

};
```


### DataOciFleetAppsManagementSchedulerDefinitionSchedule <a name="DataOciFleetAppsManagementSchedulerDefinitionSchedule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionSchedule {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList <a name="DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.get"></a>

```csharp
private DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.applicationType">ApplicationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.lifecycleOperation">LifecycleOperation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.product">Product</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.runbookId">RunbookId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.subjects">Subjects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.targetId">TargetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroups">DataOciFleetAppsManagementSchedulerDefinitionActionGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationType`<sup>Required</sup> <a name="ApplicationType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.applicationType"></a>

```csharp
public string ApplicationType { get; }
```

- *Type:* string

---

##### `LifecycleOperation`<sup>Required</sup> <a name="LifecycleOperation" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.lifecycleOperation"></a>

```csharp
public string LifecycleOperation { get; }
```

- *Type:* string

---

##### `Product`<sup>Required</sup> <a name="Product" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.product"></a>

```csharp
public string Product { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `RunbookId`<sup>Required</sup> <a name="RunbookId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.runbookId"></a>

```csharp
public string RunbookId { get; }
```

- *Type:* string

---

##### `Subjects`<sup>Required</sup> <a name="Subjects" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.subjects"></a>

```csharp
public string[] Subjects { get; }
```

- *Type:* string[]

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.targetId"></a>

```csharp
public string TargetId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroupsOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetAppsManagementSchedulerDefinitionActionGroups InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionActionGroups">DataOciFleetAppsManagementSchedulerDefinitionActionGroups</a>

---


### DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList <a name="DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.get"></a>

```csharp
private DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments">DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments">DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArguments</a>

---


### DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList <a name="DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.get"></a>

```csharp
private DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.arguments">Arguments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList">DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.stepName">StepName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParameters">DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Arguments`<sup>Required</sup> <a name="Arguments" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.arguments"></a>

```csharp
public DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList Arguments { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList">DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersArgumentsList</a>

---

##### `StepName`<sup>Required</sup> <a name="StepName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.stepName"></a>

```csharp
public string StepName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParameters InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParameters">DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParameters</a>

---


### DataOciFleetAppsManagementSchedulerDefinitionRunBooksList <a name="DataOciFleetAppsManagementSchedulerDefinitionRunBooksList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionRunBooksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.get"></a>

```csharp
private DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.inputParameters">InputParameters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList">DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooks">DataOciFleetAppsManagementSchedulerDefinitionRunBooks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InputParameters`<sup>Required</sup> <a name="InputParameters" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.inputParameters"></a>

```csharp
public DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList InputParameters { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList">DataOciFleetAppsManagementSchedulerDefinitionRunBooksInputParametersList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooksOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetAppsManagementSchedulerDefinitionRunBooks InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionRunBooks">DataOciFleetAppsManagementSchedulerDefinitionRunBooks</a>

---


### DataOciFleetAppsManagementSchedulerDefinitionScheduleList <a name="DataOciFleetAppsManagementSchedulerDefinitionScheduleList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.get"></a>

```csharp
private DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference <a name="DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.executionStartdate">ExecutionStartdate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.maintenanceWindowId">MaintenanceWindowId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.recurrences">Recurrences</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionSchedule">DataOciFleetAppsManagementSchedulerDefinitionSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `ExecutionStartdate`<sup>Required</sup> <a name="ExecutionStartdate" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.executionStartdate"></a>

```csharp
public string ExecutionStartdate { get; }
```

- *Type:* string

---

##### `MaintenanceWindowId`<sup>Required</sup> <a name="MaintenanceWindowId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.maintenanceWindowId"></a>

```csharp
public string MaintenanceWindowId { get; }
```

- *Type:* string

---

##### `Recurrences`<sup>Required</sup> <a name="Recurrences" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.recurrences"></a>

```csharp
public string Recurrences { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionScheduleOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetAppsManagementSchedulerDefinitionSchedule InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementSchedulerDefinition.DataOciFleetAppsManagementSchedulerDefinitionSchedule">DataOciFleetAppsManagementSchedulerDefinitionSchedule</a>

---



