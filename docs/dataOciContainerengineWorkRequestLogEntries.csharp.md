# `dataOciContainerengineWorkRequestLogEntries` Submodule <a name="`dataOciContainerengineWorkRequestLogEntries` Submodule" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciContainerengineWorkRequestLogEntries <a name="DataOciContainerengineWorkRequestLogEntries" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_work_request_log_entries oci_containerengine_work_request_log_entries}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineWorkRequestLogEntries(Construct Scope, string Id, DataOciContainerengineWorkRequestLogEntriesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesConfig">DataOciContainerengineWorkRequestLogEntriesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesConfig">DataOciContainerengineWorkRequestLogEntriesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciContainerengineWorkRequestLogEntries resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciContainerengineWorkRequestLogEntries.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciContainerengineWorkRequestLogEntries.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciContainerengineWorkRequestLogEntries.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciContainerengineWorkRequestLogEntries.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciContainerengineWorkRequestLogEntries resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciContainerengineWorkRequestLogEntries to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciContainerengineWorkRequestLogEntries that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_work_request_log_entries#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciContainerengineWorkRequestLogEntries to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterList">DataOciContainerengineWorkRequestLogEntriesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.property.workRequestLogEntries">WorkRequestLogEntries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesList">DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.property.workRequestIdInput">WorkRequestIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.property.workRequestId">WorkRequestId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.property.filter"></a>

```csharp
public DataOciContainerengineWorkRequestLogEntriesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterList">DataOciContainerengineWorkRequestLogEntriesFilterList</a>

---

##### `WorkRequestLogEntries`<sup>Required</sup> <a name="WorkRequestLogEntries" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.property.workRequestLogEntries"></a>

```csharp
public DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesList WorkRequestLogEntries { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesList">DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `WorkRequestIdInput`<sup>Optional</sup> <a name="WorkRequestIdInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.property.workRequestIdInput"></a>

```csharp
public string WorkRequestIdInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `WorkRequestId`<sup>Required</sup> <a name="WorkRequestId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.property.workRequestId"></a>

```csharp
public string WorkRequestId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntries.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciContainerengineWorkRequestLogEntriesConfig <a name="DataOciContainerengineWorkRequestLogEntriesConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineWorkRequestLogEntriesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string WorkRequestId,
    object Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_work_request_log_entries#compartment_id DataOciContainerengineWorkRequestLogEntries#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesConfig.property.workRequestId">WorkRequestId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_work_request_log_entries#work_request_id DataOciContainerengineWorkRequestLogEntries#work_request_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_work_request_log_entries#id DataOciContainerengineWorkRequestLogEntries#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_work_request_log_entries#compartment_id DataOciContainerengineWorkRequestLogEntries#compartment_id}.

---

##### `WorkRequestId`<sup>Required</sup> <a name="WorkRequestId" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesConfig.property.workRequestId"></a>

```csharp
public string WorkRequestId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_work_request_log_entries#work_request_id DataOciContainerengineWorkRequestLogEntries#work_request_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_work_request_log_entries#filter DataOciContainerengineWorkRequestLogEntries#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_work_request_log_entries#id DataOciContainerengineWorkRequestLogEntries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciContainerengineWorkRequestLogEntriesFilter <a name="DataOciContainerengineWorkRequestLogEntriesFilter" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineWorkRequestLogEntriesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_work_request_log_entries#name DataOciContainerengineWorkRequestLogEntries#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_work_request_log_entries#values DataOciContainerengineWorkRequestLogEntries#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_work_request_log_entries#regex DataOciContainerengineWorkRequestLogEntries#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_work_request_log_entries#name DataOciContainerengineWorkRequestLogEntries#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_work_request_log_entries#values DataOciContainerengineWorkRequestLogEntries#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_work_request_log_entries#regex DataOciContainerengineWorkRequestLogEntries#regex}.

---

### DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntries <a name="DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntries" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntries.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntries {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciContainerengineWorkRequestLogEntriesFilterList <a name="DataOciContainerengineWorkRequestLogEntriesFilterList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineWorkRequestLogEntriesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterList.get"></a>

```csharp
private DataOciContainerengineWorkRequestLogEntriesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciContainerengineWorkRequestLogEntriesFilterOutputReference <a name="DataOciContainerengineWorkRequestLogEntriesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineWorkRequestLogEntriesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesList <a name="DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesList.get"></a>

```csharp
private DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference <a name="DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.property.timestamp">Timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntries">DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.property.timestamp"></a>

```csharp
public string Timestamp { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntriesOutputReference.property.internalValue"></a>

```csharp
public DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntries InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineWorkRequestLogEntries.DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntries">DataOciContainerengineWorkRequestLogEntriesWorkRequestLogEntries</a>

---



