# `dataOciDataSafeTargetDatabaseRoles` Submodule <a name="`dataOciDataSafeTargetDatabaseRoles` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeTargetDatabaseRoles <a name="DataOciDataSafeTargetDatabaseRoles" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_roles oci_data_safe_target_database_roles}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeTargetDatabaseRoles(Construct Scope, string Id, DataOciDataSafeTargetDatabaseRolesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig">DataOciDataSafeTargetDatabaseRolesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig">DataOciDataSafeTargetDatabaseRolesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.resetAuthenticationType">ResetAuthenticationType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.resetIsOracleMaintained">ResetIsOracleMaintained</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.resetRoleName">ResetRoleName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.resetRoleNameContains">ResetRoleNameContains</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetAuthenticationType` <a name="ResetAuthenticationType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.resetAuthenticationType"></a>

```csharp
private void ResetAuthenticationType()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsOracleMaintained` <a name="ResetIsOracleMaintained" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.resetIsOracleMaintained"></a>

```csharp
private void ResetIsOracleMaintained()
```

##### `ResetRoleName` <a name="ResetRoleName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.resetRoleName"></a>

```csharp
private void ResetRoleName()
```

##### `ResetRoleNameContains` <a name="ResetRoleNameContains" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.resetRoleNameContains"></a>

```csharp
private void ResetRoleNameContains()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeTargetDatabaseRoles resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeTargetDatabaseRoles.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeTargetDatabaseRoles.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeTargetDatabaseRoles.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeTargetDatabaseRoles.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDataSafeTargetDatabaseRoles resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeTargetDatabaseRoles to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeTargetDatabaseRoles that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_roles#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeTargetDatabaseRoles to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList">DataOciDataSafeTargetDatabaseRolesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.roles">Roles</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList">DataOciDataSafeTargetDatabaseRolesRolesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.authenticationTypeInput">AuthenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.isOracleMaintainedInput">IsOracleMaintainedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.roleNameContainsInput">RoleNameContainsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.roleNameInput">RoleNameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.targetDatabaseIdInput">TargetDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.authenticationType">AuthenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.isOracleMaintained">IsOracleMaintained</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.roleName">RoleName</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.roleNameContains">RoleNameContains</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.targetDatabaseId">TargetDatabaseId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.filter"></a>

```csharp
public DataOciDataSafeTargetDatabaseRolesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList">DataOciDataSafeTargetDatabaseRolesFilterList</a>

---

##### `Roles`<sup>Required</sup> <a name="Roles" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.roles"></a>

```csharp
public DataOciDataSafeTargetDatabaseRolesRolesList Roles { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList">DataOciDataSafeTargetDatabaseRolesRolesList</a>

---

##### `AuthenticationTypeInput`<sup>Optional</sup> <a name="AuthenticationTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.authenticationTypeInput"></a>

```csharp
public string AuthenticationTypeInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsOracleMaintainedInput`<sup>Optional</sup> <a name="IsOracleMaintainedInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.isOracleMaintainedInput"></a>

```csharp
public object IsOracleMaintainedInput { get; }
```

- *Type:* object

---

##### `RoleNameContainsInput`<sup>Optional</sup> <a name="RoleNameContainsInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.roleNameContainsInput"></a>

```csharp
public string RoleNameContainsInput { get; }
```

- *Type:* string

---

##### `RoleNameInput`<sup>Optional</sup> <a name="RoleNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.roleNameInput"></a>

```csharp
public string[] RoleNameInput { get; }
```

- *Type:* string[]

---

##### `TargetDatabaseIdInput`<sup>Optional</sup> <a name="TargetDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.targetDatabaseIdInput"></a>

```csharp
public string TargetDatabaseIdInput { get; }
```

- *Type:* string

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.authenticationType"></a>

```csharp
public string AuthenticationType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsOracleMaintained`<sup>Required</sup> <a name="IsOracleMaintained" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.isOracleMaintained"></a>

```csharp
public object IsOracleMaintained { get; }
```

- *Type:* object

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.roleName"></a>

```csharp
public string[] RoleName { get; }
```

- *Type:* string[]

---

##### `RoleNameContains`<sup>Required</sup> <a name="RoleNameContains" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.roleNameContains"></a>

```csharp
public string RoleNameContains { get; }
```

- *Type:* string

---

##### `TargetDatabaseId`<sup>Required</sup> <a name="TargetDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.targetDatabaseId"></a>

```csharp
public string TargetDatabaseId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRoles.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeTargetDatabaseRolesConfig <a name="DataOciDataSafeTargetDatabaseRolesConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeTargetDatabaseRolesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string TargetDatabaseId,
    string AuthenticationType = null,
    object Filter = null,
    string Id = null,
    object IsOracleMaintained = null,
    string[] RoleName = null,
    string RoleNameContains = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.targetDatabaseId">TargetDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_roles#target_database_id DataOciDataSafeTargetDatabaseRoles#target_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.authenticationType">AuthenticationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_roles#authentication_type DataOciDataSafeTargetDatabaseRoles#authentication_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_roles#id DataOciDataSafeTargetDatabaseRoles#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.isOracleMaintained">IsOracleMaintained</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_roles#is_oracle_maintained DataOciDataSafeTargetDatabaseRoles#is_oracle_maintained}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.roleName">RoleName</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_roles#role_name DataOciDataSafeTargetDatabaseRoles#role_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.roleNameContains">RoleNameContains</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_roles#role_name_contains DataOciDataSafeTargetDatabaseRoles#role_name_contains}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `TargetDatabaseId`<sup>Required</sup> <a name="TargetDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.targetDatabaseId"></a>

```csharp
public string TargetDatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_roles#target_database_id DataOciDataSafeTargetDatabaseRoles#target_database_id}.

---

##### `AuthenticationType`<sup>Optional</sup> <a name="AuthenticationType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.authenticationType"></a>

```csharp
public string AuthenticationType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_roles#authentication_type DataOciDataSafeTargetDatabaseRoles#authentication_type}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_roles#filter DataOciDataSafeTargetDatabaseRoles#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_roles#id DataOciDataSafeTargetDatabaseRoles#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsOracleMaintained`<sup>Optional</sup> <a name="IsOracleMaintained" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.isOracleMaintained"></a>

```csharp
public object IsOracleMaintained { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_roles#is_oracle_maintained DataOciDataSafeTargetDatabaseRoles#is_oracle_maintained}.

---

##### `RoleName`<sup>Optional</sup> <a name="RoleName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.roleName"></a>

```csharp
public string[] RoleName { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_roles#role_name DataOciDataSafeTargetDatabaseRoles#role_name}.

---

##### `RoleNameContains`<sup>Optional</sup> <a name="RoleNameContains" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesConfig.property.roleNameContains"></a>

```csharp
public string RoleNameContains { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_roles#role_name_contains DataOciDataSafeTargetDatabaseRoles#role_name_contains}.

---

### DataOciDataSafeTargetDatabaseRolesFilter <a name="DataOciDataSafeTargetDatabaseRolesFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeTargetDatabaseRolesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_roles#name DataOciDataSafeTargetDatabaseRoles#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_roles#values DataOciDataSafeTargetDatabaseRoles#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_roles#regex DataOciDataSafeTargetDatabaseRoles#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_roles#name DataOciDataSafeTargetDatabaseRoles#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_roles#values DataOciDataSafeTargetDatabaseRoles#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_target_database_roles#regex DataOciDataSafeTargetDatabaseRoles#regex}.

---

### DataOciDataSafeTargetDatabaseRolesRoles <a name="DataOciDataSafeTargetDatabaseRolesRoles" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRoles"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRoles.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeTargetDatabaseRolesRoles {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeTargetDatabaseRolesFilterList <a name="DataOciDataSafeTargetDatabaseRolesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeTargetDatabaseRolesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.get"></a>

```csharp
private DataOciDataSafeTargetDatabaseRolesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataSafeTargetDatabaseRolesFilterOutputReference <a name="DataOciDataSafeTargetDatabaseRolesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeTargetDatabaseRolesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataSafeTargetDatabaseRolesRolesList <a name="DataOciDataSafeTargetDatabaseRolesRolesList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeTargetDatabaseRolesRolesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList.get"></a>

```csharp
private DataOciDataSafeTargetDatabaseRolesRolesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeTargetDatabaseRolesRolesOutputReference <a name="DataOciDataSafeTargetDatabaseRolesRolesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeTargetDatabaseRolesRolesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.property.authenticationType">AuthenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.property.isCommon">IsCommon</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.property.isImplicit">IsImplicit</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.property.isInherited">IsInherited</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.property.isOracleMaintained">IsOracleMaintained</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.property.isPasswordRequired">IsPasswordRequired</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.property.roleName">RoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRoles">DataOciDataSafeTargetDatabaseRolesRoles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthenticationType`<sup>Required</sup> <a name="AuthenticationType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.property.authenticationType"></a>

```csharp
public string AuthenticationType { get; }
```

- *Type:* string

---

##### `IsCommon`<sup>Required</sup> <a name="IsCommon" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.property.isCommon"></a>

```csharp
public IResolvable IsCommon { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsImplicit`<sup>Required</sup> <a name="IsImplicit" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.property.isImplicit"></a>

```csharp
public IResolvable IsImplicit { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsInherited`<sup>Required</sup> <a name="IsInherited" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.property.isInherited"></a>

```csharp
public IResolvable IsInherited { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsOracleMaintained`<sup>Required</sup> <a name="IsOracleMaintained" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.property.isOracleMaintained"></a>

```csharp
public IResolvable IsOracleMaintained { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsPasswordRequired`<sup>Required</sup> <a name="IsPasswordRequired" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.property.isPasswordRequired"></a>

```csharp
public IResolvable IsPasswordRequired { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `RoleName`<sup>Required</sup> <a name="RoleName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.property.roleName"></a>

```csharp
public string RoleName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRolesOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeTargetDatabaseRolesRoles InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeTargetDatabaseRoles.DataOciDataSafeTargetDatabaseRolesRoles">DataOciDataSafeTargetDatabaseRolesRoles</a>

---



