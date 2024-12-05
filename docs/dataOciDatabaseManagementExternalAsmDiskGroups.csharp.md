# `dataOciDatabaseManagementExternalAsmDiskGroups` Submodule <a name="`dataOciDatabaseManagementExternalAsmDiskGroups` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementExternalAsmDiskGroups <a name="DataOciDatabaseManagementExternalAsmDiskGroups" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups oci_database_management_external_asm_disk_groups}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalAsmDiskGroups(Construct Scope, string Id, DataOciDatabaseManagementExternalAsmDiskGroupsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig">DataOciDatabaseManagementExternalAsmDiskGroupsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig">DataOciDatabaseManagementExternalAsmDiskGroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.resetOpcNamedCredentialId">ResetOpcNamedCredentialId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOpcNamedCredentialId` <a name="ResetOpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.resetOpcNamedCredentialId"></a>

```csharp
private void ResetOpcNamedCredentialId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementExternalAsmDiskGroups resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementExternalAsmDiskGroups.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementExternalAsmDiskGroups.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementExternalAsmDiskGroups.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementExternalAsmDiskGroups.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseManagementExternalAsmDiskGroups resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementExternalAsmDiskGroups to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementExternalAsmDiskGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementExternalAsmDiskGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.externalAsmDiskGroupCollection">ExternalAsmDiskGroupCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList">DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList">DataOciDatabaseManagementExternalAsmDiskGroupsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.externalAsmIdInput">ExternalAsmIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.opcNamedCredentialIdInput">OpcNamedCredentialIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.externalAsmId">ExternalAsmId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.opcNamedCredentialId">OpcNamedCredentialId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ExternalAsmDiskGroupCollection`<sup>Required</sup> <a name="ExternalAsmDiskGroupCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.externalAsmDiskGroupCollection"></a>

```csharp
public DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList ExternalAsmDiskGroupCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList">DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.filter"></a>

```csharp
public DataOciDatabaseManagementExternalAsmDiskGroupsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList">DataOciDatabaseManagementExternalAsmDiskGroupsFilterList</a>

---

##### `ExternalAsmIdInput`<sup>Optional</sup> <a name="ExternalAsmIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.externalAsmIdInput"></a>

```csharp
public string ExternalAsmIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OpcNamedCredentialIdInput`<sup>Optional</sup> <a name="OpcNamedCredentialIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.opcNamedCredentialIdInput"></a>

```csharp
public string OpcNamedCredentialIdInput { get; }
```

- *Type:* string

---

##### `ExternalAsmId`<sup>Required</sup> <a name="ExternalAsmId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.externalAsmId"></a>

```csharp
public string ExternalAsmId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OpcNamedCredentialId`<sup>Required</sup> <a name="OpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.opcNamedCredentialId"></a>

```csharp
public string OpcNamedCredentialId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroups.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementExternalAsmDiskGroupsConfig <a name="DataOciDatabaseManagementExternalAsmDiskGroupsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalAsmDiskGroupsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ExternalAsmId,
    object Filter = null,
    string Id = null,
    string OpcNamedCredentialId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.externalAsmId">ExternalAsmId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#external_asm_id DataOciDatabaseManagementExternalAsmDiskGroups#external_asm_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#id DataOciDatabaseManagementExternalAsmDiskGroups#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.opcNamedCredentialId">OpcNamedCredentialId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#opc_named_credential_id DataOciDatabaseManagementExternalAsmDiskGroups#opc_named_credential_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ExternalAsmId`<sup>Required</sup> <a name="ExternalAsmId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.externalAsmId"></a>

```csharp
public string ExternalAsmId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#external_asm_id DataOciDatabaseManagementExternalAsmDiskGroups#external_asm_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#filter DataOciDatabaseManagementExternalAsmDiskGroups#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#id DataOciDatabaseManagementExternalAsmDiskGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OpcNamedCredentialId`<sup>Optional</sup> <a name="OpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsConfig.property.opcNamedCredentialId"></a>

```csharp
public string OpcNamedCredentialId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#opc_named_credential_id DataOciDatabaseManagementExternalAsmDiskGroups#opc_named_credential_id}.

---

### DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollection <a name="DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollection {

};
```


### DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItems <a name="DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItems {

};
```


### DataOciDatabaseManagementExternalAsmDiskGroupsFilter <a name="DataOciDatabaseManagementExternalAsmDiskGroupsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalAsmDiskGroupsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#name DataOciDatabaseManagementExternalAsmDiskGroups#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#values DataOciDatabaseManagementExternalAsmDiskGroups#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#regex DataOciDatabaseManagementExternalAsmDiskGroups#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#name DataOciDatabaseManagementExternalAsmDiskGroups#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#values DataOciDatabaseManagementExternalAsmDiskGroups#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_external_asm_disk_groups#regex DataOciDatabaseManagementExternalAsmDiskGroups#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList <a name="DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.get"></a>

```csharp
private DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference <a name="DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.databases">Databases</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.dismountingInstanceCount">DismountingInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.isSparse">IsSparse</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.mountingInstanceCount">MountingInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.redundancyType">RedundancyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.totalSizeInMbs">TotalSizeInMbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.usedPercent">UsedPercent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.usedSizeInMbs">UsedSizeInMbs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItems">DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Databases`<sup>Required</sup> <a name="Databases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.databases"></a>

```csharp
public string[] Databases { get; }
```

- *Type:* string[]

---

##### `DismountingInstanceCount`<sup>Required</sup> <a name="DismountingInstanceCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.dismountingInstanceCount"></a>

```csharp
public double DismountingInstanceCount { get; }
```

- *Type:* double

---

##### `IsSparse`<sup>Required</sup> <a name="IsSparse" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.isSparse"></a>

```csharp
public IResolvable IsSparse { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MountingInstanceCount`<sup>Required</sup> <a name="MountingInstanceCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.mountingInstanceCount"></a>

```csharp
public double MountingInstanceCount { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RedundancyType`<sup>Required</sup> <a name="RedundancyType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.redundancyType"></a>

```csharp
public string RedundancyType { get; }
```

- *Type:* string

---

##### `TotalSizeInMbs`<sup>Required</sup> <a name="TotalSizeInMbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.totalSizeInMbs"></a>

```csharp
public string TotalSizeInMbs { get; }
```

- *Type:* string

---

##### `UsedPercent`<sup>Required</sup> <a name="UsedPercent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.usedPercent"></a>

```csharp
public double UsedPercent { get; }
```

- *Type:* double

---

##### `UsedSizeInMbs`<sup>Required</sup> <a name="UsedSizeInMbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.usedSizeInMbs"></a>

```csharp
public string UsedSizeInMbs { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItems">DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItems</a>

---


### DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList <a name="DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.get"></a>

```csharp
private DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference <a name="DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList">DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollection">DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.property.items"></a>

```csharp
public DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList">DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollection">DataOciDatabaseManagementExternalAsmDiskGroupsExternalAsmDiskGroupCollection</a>

---


### DataOciDatabaseManagementExternalAsmDiskGroupsFilterList <a name="DataOciDatabaseManagementExternalAsmDiskGroupsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalAsmDiskGroupsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.get"></a>

```csharp
private DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference <a name="DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementExternalAsmDiskGroups.DataOciDatabaseManagementExternalAsmDiskGroupsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



