# `dataOciFleetAppsManagementTaskRecord` Submodule <a name="`dataOciFleetAppsManagementTaskRecord` Submodule" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciFleetAppsManagementTaskRecord <a name="DataOciFleetAppsManagementTaskRecord" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_record oci_fleet_apps_management_task_record}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementTaskRecord(Construct Scope, string Id, DataOciFleetAppsManagementTaskRecordConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordConfig">DataOciFleetAppsManagementTaskRecordConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordConfig">DataOciFleetAppsManagementTaskRecordConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciFleetAppsManagementTaskRecord resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFleetAppsManagementTaskRecord.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFleetAppsManagementTaskRecord.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFleetAppsManagementTaskRecord.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciFleetAppsManagementTaskRecord.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciFleetAppsManagementTaskRecord resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciFleetAppsManagementTaskRecord to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciFleetAppsManagementTaskRecord that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_record#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciFleetAppsManagementTaskRecord to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.details">Details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList">DataOciFleetAppsManagementTaskRecordDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.resourceRegion">ResourceRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.taskRecordIdInput">TaskRecordIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.taskRecordId">TaskRecordId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Details`<sup>Required</sup> <a name="Details" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.details"></a>

```csharp
public DataOciFleetAppsManagementTaskRecordDetailsList Details { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList">DataOciFleetAppsManagementTaskRecordDetailsList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `ResourceRegion`<sup>Required</sup> <a name="ResourceRegion" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.resourceRegion"></a>

```csharp
public string ResourceRegion { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `TaskRecordIdInput`<sup>Optional</sup> <a name="TaskRecordIdInput" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.taskRecordIdInput"></a>

```csharp
public string TaskRecordIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `TaskRecordId`<sup>Required</sup> <a name="TaskRecordId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.taskRecordId"></a>

```csharp
public string TaskRecordId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecord.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciFleetAppsManagementTaskRecordConfig <a name="DataOciFleetAppsManagementTaskRecordConfig" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementTaskRecordConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string TaskRecordId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordConfig.property.taskRecordId">TaskRecordId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_record#task_record_id DataOciFleetAppsManagementTaskRecord#task_record_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_record#id DataOciFleetAppsManagementTaskRecord#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `TaskRecordId`<sup>Required</sup> <a name="TaskRecordId" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordConfig.property.taskRecordId"></a>

```csharp
public string TaskRecordId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_record#task_record_id DataOciFleetAppsManagementTaskRecord#task_record_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/fleet_apps_management_task_record#id DataOciFleetAppsManagementTaskRecord#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciFleetAppsManagementTaskRecordDetails <a name="DataOciFleetAppsManagementTaskRecordDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementTaskRecordDetails {

};
```


### DataOciFleetAppsManagementTaskRecordDetailsExecutionDetails <a name="DataOciFleetAppsManagementTaskRecordDetailsExecutionDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementTaskRecordDetailsExecutionDetails {

};
```


### DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContent <a name="DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContent" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContent"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContent.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContent {

};
```


### DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariables <a name="DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariables" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariables.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariables {

};
```


### DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariables <a name="DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariables" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariables"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariables.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariables {

};
```


### DataOciFleetAppsManagementTaskRecordDetailsProperties <a name="DataOciFleetAppsManagementTaskRecordDetailsProperties" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementTaskRecordDetailsProperties {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList <a name="DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList.get"></a>

```csharp
private DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference <a name="DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.property.checksum">Checksum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.property.object">Object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.property.sourceType">SourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContent">DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContent</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Checksum`<sup>Required</sup> <a name="Checksum" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.property.checksum"></a>

```csharp
public string Checksum { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.property.object"></a>

```csharp
public string Object { get; }
```

- *Type:* string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.property.sourceType"></a>

```csharp
public string SourceType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContent InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContent">DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContent</a>

---


### DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList <a name="DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList.get"></a>

```csharp
private DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference <a name="DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.property.command">Command</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.property.content">Content</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList">DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.property.executionType">ExecutionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.property.variables">Variables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList">DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetails">DataOciFleetAppsManagementTaskRecordDetailsExecutionDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Command`<sup>Required</sup> <a name="Command" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.property.command"></a>

```csharp
public string Command { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.property.content"></a>

```csharp
public DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList Content { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList">DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsContentList</a>

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `ExecutionType`<sup>Required</sup> <a name="ExecutionType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.property.executionType"></a>

```csharp
public string ExecutionType { get; }
```

- *Type:* string

---

##### `Variables`<sup>Required</sup> <a name="Variables" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.property.variables"></a>

```csharp
public DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList Variables { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList">DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetAppsManagementTaskRecordDetailsExecutionDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetails">DataOciFleetAppsManagementTaskRecordDetailsExecutionDetails</a>

---


### DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList <a name="DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.get"></a>

```csharp
private DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference <a name="DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariables">DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariables InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariables">DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariables</a>

---


### DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList <a name="DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList.get"></a>

```csharp
private DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference <a name="DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.inputVariables">InputVariables</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList">DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.outputVariables">OutputVariables</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariables">DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariables</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InputVariables`<sup>Required</sup> <a name="InputVariables" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.inputVariables"></a>

```csharp
public DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList InputVariables { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList">DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesInputVariablesList</a>

---

##### `OutputVariables`<sup>Required</sup> <a name="OutputVariables" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.outputVariables"></a>

```csharp
public string[] OutputVariables { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariablesOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariables InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariables">DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsVariables</a>

---


### DataOciFleetAppsManagementTaskRecordDetailsList <a name="DataOciFleetAppsManagementTaskRecordDetailsList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementTaskRecordDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList.get"></a>

```csharp
private DataOciFleetAppsManagementTaskRecordDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetAppsManagementTaskRecordDetailsOutputReference <a name="DataOciFleetAppsManagementTaskRecordDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementTaskRecordDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.property.executionDetails">ExecutionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList">DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.property.osType">OsType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.property.platform">Platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.property.properties">Properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList">DataOciFleetAppsManagementTaskRecordDetailsPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetails">DataOciFleetAppsManagementTaskRecordDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExecutionDetails`<sup>Required</sup> <a name="ExecutionDetails" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.property.executionDetails"></a>

```csharp
public DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList ExecutionDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList">DataOciFleetAppsManagementTaskRecordDetailsExecutionDetailsList</a>

---

##### `OsType`<sup>Required</sup> <a name="OsType" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.property.osType"></a>

```csharp
public string OsType { get; }
```

- *Type:* string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.property.platform"></a>

```csharp
public string Platform { get; }
```

- *Type:* string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.property.properties"></a>

```csharp
public DataOciFleetAppsManagementTaskRecordDetailsPropertiesList Properties { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList">DataOciFleetAppsManagementTaskRecordDetailsPropertiesList</a>

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetAppsManagementTaskRecordDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetails">DataOciFleetAppsManagementTaskRecordDetails</a>

---


### DataOciFleetAppsManagementTaskRecordDetailsPropertiesList <a name="DataOciFleetAppsManagementTaskRecordDetailsPropertiesList" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementTaskRecordDetailsPropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList.get"></a>

```csharp
private DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference <a name="DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.property.numRetries">NumRetries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.property.timeoutInSeconds">TimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsProperties">DataOciFleetAppsManagementTaskRecordDetailsProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NumRetries`<sup>Required</sup> <a name="NumRetries" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.property.numRetries"></a>

```csharp
public double NumRetries { get; }
```

- *Type:* double

---

##### `TimeoutInSeconds`<sup>Required</sup> <a name="TimeoutInSeconds" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.property.timeoutInSeconds"></a>

```csharp
public double TimeoutInSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsPropertiesOutputReference.property.internalValue"></a>

```csharp
public DataOciFleetAppsManagementTaskRecordDetailsProperties InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciFleetAppsManagementTaskRecord.DataOciFleetAppsManagementTaskRecordDetailsProperties">DataOciFleetAppsManagementTaskRecordDetailsProperties</a>

---



