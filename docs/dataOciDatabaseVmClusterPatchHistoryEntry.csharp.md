# `dataOciDatabaseVmClusterPatchHistoryEntry` Submodule <a name="`dataOciDatabaseVmClusterPatchHistoryEntry` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseVmClusterPatchHistoryEntry <a name="DataOciDatabaseVmClusterPatchHistoryEntry" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entry oci_database_vm_cluster_patch_history_entry}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseVmClusterPatchHistoryEntry(Construct Scope, string Id, DataOciDatabaseVmClusterPatchHistoryEntryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntryConfig">DataOciDatabaseVmClusterPatchHistoryEntryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntryConfig">DataOciDatabaseVmClusterPatchHistoryEntryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseVmClusterPatchHistoryEntry resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseVmClusterPatchHistoryEntry.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseVmClusterPatchHistoryEntry.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseVmClusterPatchHistoryEntry.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseVmClusterPatchHistoryEntry.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseVmClusterPatchHistoryEntry resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseVmClusterPatchHistoryEntry to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseVmClusterPatchHistoryEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entry#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseVmClusterPatchHistoryEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.patchId">PatchId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.timeEnded">TimeEnded</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.timeStarted">TimeStarted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.patchHistoryEntryIdInput">PatchHistoryEntryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.vmClusterIdInput">VmClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.patchHistoryEntryId">PatchHistoryEntryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.vmClusterId">VmClusterId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `PatchId`<sup>Required</sup> <a name="PatchId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.patchId"></a>

```csharp
public string PatchId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeEnded`<sup>Required</sup> <a name="TimeEnded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.timeEnded"></a>

```csharp
public string TimeEnded { get; }
```

- *Type:* string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.timeStarted"></a>

```csharp
public string TimeStarted { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PatchHistoryEntryIdInput`<sup>Optional</sup> <a name="PatchHistoryEntryIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.patchHistoryEntryIdInput"></a>

```csharp
public string PatchHistoryEntryIdInput { get; }
```

- *Type:* string

---

##### `VmClusterIdInput`<sup>Optional</sup> <a name="VmClusterIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.vmClusterIdInput"></a>

```csharp
public string VmClusterIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PatchHistoryEntryId`<sup>Required</sup> <a name="PatchHistoryEntryId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.patchHistoryEntryId"></a>

```csharp
public string PatchHistoryEntryId { get; }
```

- *Type:* string

---

##### `VmClusterId`<sup>Required</sup> <a name="VmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.vmClusterId"></a>

```csharp
public string VmClusterId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntry.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseVmClusterPatchHistoryEntryConfig <a name="DataOciDatabaseVmClusterPatchHistoryEntryConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntryConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntryConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseVmClusterPatchHistoryEntryConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string PatchHistoryEntryId,
    string VmClusterId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntryConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntryConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntryConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntryConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntryConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntryConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntryConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntryConfig.property.patchHistoryEntryId">PatchHistoryEntryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entry#patch_history_entry_id DataOciDatabaseVmClusterPatchHistoryEntry#patch_history_entry_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntryConfig.property.vmClusterId">VmClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entry#vm_cluster_id DataOciDatabaseVmClusterPatchHistoryEntry#vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntryConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entry#id DataOciDatabaseVmClusterPatchHistoryEntry#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntryConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntryConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntryConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `PatchHistoryEntryId`<sup>Required</sup> <a name="PatchHistoryEntryId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntryConfig.property.patchHistoryEntryId"></a>

```csharp
public string PatchHistoryEntryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entry#patch_history_entry_id DataOciDatabaseVmClusterPatchHistoryEntry#patch_history_entry_id}.

---

##### `VmClusterId`<sup>Required</sup> <a name="VmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntryConfig.property.vmClusterId"></a>

```csharp
public string VmClusterId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entry#vm_cluster_id DataOciDatabaseVmClusterPatchHistoryEntry#vm_cluster_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterPatchHistoryEntry.DataOciDatabaseVmClusterPatchHistoryEntryConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_patch_history_entry#id DataOciDatabaseVmClusterPatchHistoryEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



