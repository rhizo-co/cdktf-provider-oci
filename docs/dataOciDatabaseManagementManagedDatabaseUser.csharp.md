# `dataOciDatabaseManagementManagedDatabaseUser` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseUser` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseUser <a name="DataOciDatabaseManagementManagedDatabaseUser" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user oci_database_management_managed_database_user}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseUser(Construct Scope, string Id, DataOciDatabaseManagementManagedDatabaseUserConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUserConfig">DataOciDatabaseManagementManagedDatabaseUserConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUserConfig">DataOciDatabaseManagementManagedDatabaseUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.resetOpcNamedCredentialId">ResetOpcNamedCredentialId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOpcNamedCredentialId` <a name="ResetOpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.resetOpcNamedCredentialId"></a>

```csharp
private void ResetOpcNamedCredentialId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseUser resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedDatabaseUser.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedDatabaseUser.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedDatabaseUser.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedDatabaseUser.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseUser resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseUser to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementManagedDatabaseUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.allShared">AllShared</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.authentication">Authentication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.common">Common</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.consumerGroup">ConsumerGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.defaultCollation">DefaultCollation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.defaultTablespace">DefaultTablespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.editionsEnabled">EditionsEnabled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.externalName">ExternalName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.externalShared">ExternalShared</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.implicit">Implicit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.inherited">Inherited</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.localTempTablespace">LocalTempTablespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.oracleMaintained">OracleMaintained</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.passwordVersions">PasswordVersions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.profile">Profile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.proxyConnect">ProxyConnect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.tempTablespace">TempTablespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.timeExpiring">TimeExpiring</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.timeLastLogin">TimeLastLogin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.timeLocked">TimeLocked</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.timePasswordChanged">TimePasswordChanged</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.managedDatabaseIdInput">ManagedDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.opcNamedCredentialIdInput">OpcNamedCredentialIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.userNameInput">UserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.opcNamedCredentialId">OpcNamedCredentialId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.userName">UserName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AllShared`<sup>Required</sup> <a name="AllShared" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.allShared"></a>

```csharp
public string AllShared { get; }
```

- *Type:* string

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.authentication"></a>

```csharp
public string Authentication { get; }
```

- *Type:* string

---

##### `Common`<sup>Required</sup> <a name="Common" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.common"></a>

```csharp
public string Common { get; }
```

- *Type:* string

---

##### `ConsumerGroup`<sup>Required</sup> <a name="ConsumerGroup" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.consumerGroup"></a>

```csharp
public string ConsumerGroup { get; }
```

- *Type:* string

---

##### `DefaultCollation`<sup>Required</sup> <a name="DefaultCollation" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.defaultCollation"></a>

```csharp
public string DefaultCollation { get; }
```

- *Type:* string

---

##### `DefaultTablespace`<sup>Required</sup> <a name="DefaultTablespace" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.defaultTablespace"></a>

```csharp
public string DefaultTablespace { get; }
```

- *Type:* string

---

##### `EditionsEnabled`<sup>Required</sup> <a name="EditionsEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.editionsEnabled"></a>

```csharp
public string EditionsEnabled { get; }
```

- *Type:* string

---

##### `ExternalName`<sup>Required</sup> <a name="ExternalName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.externalName"></a>

```csharp
public string ExternalName { get; }
```

- *Type:* string

---

##### `ExternalShared`<sup>Required</sup> <a name="ExternalShared" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.externalShared"></a>

```csharp
public string ExternalShared { get; }
```

- *Type:* string

---

##### `Implicit`<sup>Required</sup> <a name="Implicit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.implicit"></a>

```csharp
public string Implicit { get; }
```

- *Type:* string

---

##### `Inherited`<sup>Required</sup> <a name="Inherited" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.inherited"></a>

```csharp
public string Inherited { get; }
```

- *Type:* string

---

##### `LocalTempTablespace`<sup>Required</sup> <a name="LocalTempTablespace" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.localTempTablespace"></a>

```csharp
public string LocalTempTablespace { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OracleMaintained`<sup>Required</sup> <a name="OracleMaintained" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.oracleMaintained"></a>

```csharp
public string OracleMaintained { get; }
```

- *Type:* string

---

##### `PasswordVersions`<sup>Required</sup> <a name="PasswordVersions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.passwordVersions"></a>

```csharp
public string PasswordVersions { get; }
```

- *Type:* string

---

##### `Profile`<sup>Required</sup> <a name="Profile" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.profile"></a>

```csharp
public string Profile { get; }
```

- *Type:* string

---

##### `ProxyConnect`<sup>Required</sup> <a name="ProxyConnect" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.proxyConnect"></a>

```csharp
public string ProxyConnect { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TempTablespace`<sup>Required</sup> <a name="TempTablespace" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.tempTablespace"></a>

```csharp
public string TempTablespace { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeExpiring`<sup>Required</sup> <a name="TimeExpiring" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.timeExpiring"></a>

```csharp
public string TimeExpiring { get; }
```

- *Type:* string

---

##### `TimeLastLogin`<sup>Required</sup> <a name="TimeLastLogin" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.timeLastLogin"></a>

```csharp
public string TimeLastLogin { get; }
```

- *Type:* string

---

##### `TimeLocked`<sup>Required</sup> <a name="TimeLocked" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.timeLocked"></a>

```csharp
public string TimeLocked { get; }
```

- *Type:* string

---

##### `TimePasswordChanged`<sup>Required</sup> <a name="TimePasswordChanged" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.timePasswordChanged"></a>

```csharp
public string TimePasswordChanged { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManagedDatabaseIdInput`<sup>Optional</sup> <a name="ManagedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.managedDatabaseIdInput"></a>

```csharp
public string ManagedDatabaseIdInput { get; }
```

- *Type:* string

---

##### `OpcNamedCredentialIdInput`<sup>Optional</sup> <a name="OpcNamedCredentialIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.opcNamedCredentialIdInput"></a>

```csharp
public string OpcNamedCredentialIdInput { get; }
```

- *Type:* string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.userNameInput"></a>

```csharp
public string UserNameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.managedDatabaseId"></a>

```csharp
public string ManagedDatabaseId { get; }
```

- *Type:* string

---

##### `OpcNamedCredentialId`<sup>Required</sup> <a name="OpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.opcNamedCredentialId"></a>

```csharp
public string OpcNamedCredentialId { get; }
```

- *Type:* string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.userName"></a>

```csharp
public string UserName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUser.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseUserConfig <a name="DataOciDatabaseManagementManagedDatabaseUserConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUserConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUserConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseUserConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ManagedDatabaseId,
    string UserName,
    string Id = null,
    string OpcNamedCredentialId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUserConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUserConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUserConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUserConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUserConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUserConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUserConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUserConfig.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user#managed_database_id DataOciDatabaseManagementManagedDatabaseUser#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUserConfig.property.userName">UserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user#user_name DataOciDatabaseManagementManagedDatabaseUser#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUserConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user#id DataOciDatabaseManagementManagedDatabaseUser#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUserConfig.property.opcNamedCredentialId">OpcNamedCredentialId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseUser#opc_named_credential_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUserConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUserConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUserConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUserConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUserConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUserConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUserConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUserConfig.property.managedDatabaseId"></a>

```csharp
public string ManagedDatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user#managed_database_id DataOciDatabaseManagementManagedDatabaseUser#managed_database_id}.

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUserConfig.property.userName"></a>

```csharp
public string UserName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user#user_name DataOciDatabaseManagementManagedDatabaseUser#user_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUserConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user#id DataOciDatabaseManagementManagedDatabaseUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OpcNamedCredentialId`<sup>Optional</sup> <a name="OpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUser.DataOciDatabaseManagementManagedDatabaseUserConfig.property.opcNamedCredentialId"></a>

```csharp
public string OpcNamedCredentialId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseUser#opc_named_credential_id}.

---



