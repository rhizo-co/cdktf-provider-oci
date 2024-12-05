# `dataOciDatabaseVmClusterUpdateHistoryEntry` Submodule <a name="`dataOciDatabaseVmClusterUpdateHistoryEntry` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseVmClusterUpdateHistoryEntry <a name="DataOciDatabaseVmClusterUpdateHistoryEntry" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entry oci_database_vm_cluster_update_history_entry}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseVmClusterUpdateHistoryEntry(Construct Scope, string Id, DataOciDatabaseVmClusterUpdateHistoryEntryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntryConfig">DataOciDatabaseVmClusterUpdateHistoryEntryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntryConfig">DataOciDatabaseVmClusterUpdateHistoryEntryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseVmClusterUpdateHistoryEntry resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseVmClusterUpdateHistoryEntry.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseVmClusterUpdateHistoryEntry.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseVmClusterUpdateHistoryEntry.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseVmClusterUpdateHistoryEntry.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseVmClusterUpdateHistoryEntry resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseVmClusterUpdateHistoryEntry to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseVmClusterUpdateHistoryEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entry#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseVmClusterUpdateHistoryEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.timeCompleted">TimeCompleted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.timeStarted">TimeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.updateAction">UpdateAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.updateId">UpdateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.updateType">UpdateType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.updateHistoryEntryIdInput">UpdateHistoryEntryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.vmClusterIdInput">VmClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.updateHistoryEntryId">UpdateHistoryEntryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.vmClusterId">VmClusterId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCompleted`<sup>Required</sup> <a name="TimeCompleted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.timeCompleted"></a>

```csharp
public string TimeCompleted { get; }
```

- *Type:* string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.timeStarted"></a>

```csharp
public string TimeStarted { get; }
```

- *Type:* string

---

##### `UpdateAction`<sup>Required</sup> <a name="UpdateAction" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.updateAction"></a>

```csharp
public string UpdateAction { get; }
```

- *Type:* string

---

##### `UpdateId`<sup>Required</sup> <a name="UpdateId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.updateId"></a>

```csharp
public string UpdateId { get; }
```

- *Type:* string

---

##### `UpdateType`<sup>Required</sup> <a name="UpdateType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.updateType"></a>

```csharp
public string UpdateType { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `UpdateHistoryEntryIdInput`<sup>Optional</sup> <a name="UpdateHistoryEntryIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.updateHistoryEntryIdInput"></a>

```csharp
public string UpdateHistoryEntryIdInput { get; }
```

- *Type:* string

---

##### `VmClusterIdInput`<sup>Optional</sup> <a name="VmClusterIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.vmClusterIdInput"></a>

```csharp
public string VmClusterIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `UpdateHistoryEntryId`<sup>Required</sup> <a name="UpdateHistoryEntryId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.updateHistoryEntryId"></a>

```csharp
public string UpdateHistoryEntryId { get; }
```

- *Type:* string

---

##### `VmClusterId`<sup>Required</sup> <a name="VmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.vmClusterId"></a>

```csharp
public string VmClusterId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseVmClusterUpdateHistoryEntryConfig <a name="DataOciDatabaseVmClusterUpdateHistoryEntryConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntryConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseVmClusterUpdateHistoryEntryConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string UpdateHistoryEntryId,
    string VmClusterId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntryConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntryConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntryConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntryConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntryConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntryConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntryConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntryConfig.property.updateHistoryEntryId">UpdateHistoryEntryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entry#update_history_entry_id DataOciDatabaseVmClusterUpdateHistoryEntry#update_history_entry_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntryConfig.property.vmClusterId">VmClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entry#vm_cluster_id DataOciDatabaseVmClusterUpdateHistoryEntry#vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntryConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entry#id DataOciDatabaseVmClusterUpdateHistoryEntry#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntryConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntryConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntryConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `UpdateHistoryEntryId`<sup>Required</sup> <a name="UpdateHistoryEntryId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntryConfig.property.updateHistoryEntryId"></a>

```csharp
public string UpdateHistoryEntryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entry#update_history_entry_id DataOciDatabaseVmClusterUpdateHistoryEntry#update_history_entry_id}.

---

##### `VmClusterId`<sup>Required</sup> <a name="VmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntryConfig.property.vmClusterId"></a>

```csharp
public string VmClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entry#vm_cluster_id DataOciDatabaseVmClusterUpdateHistoryEntry#vm_cluster_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntryConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entry#id DataOciDatabaseVmClusterUpdateHistoryEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



