# `dataOciDatabaseManagementManagedDatabasesUserProxyUsers` Submodule <a name="`dataOciDatabaseManagementManagedDatabasesUserProxyUsers` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabasesUserProxyUsers <a name="DataOciDatabaseManagementManagedDatabasesUserProxyUsers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_proxy_users oci_database_management_managed_databases_user_proxy_users}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesUserProxyUsers(Construct Scope, string Id, DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig">DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig">DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.resetOpcNamedCredentialId">ResetOpcNamedCredentialId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetOpcNamedCredentialId` <a name="ResetOpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.resetOpcNamedCredentialId"></a>

```csharp
private void ResetOpcNamedCredentialId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabasesUserProxyUsers resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedDatabasesUserProxyUsers.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedDatabasesUserProxyUsers.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedDatabasesUserProxyUsers.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedDatabasesUserProxyUsers.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabasesUserProxyUsers resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabasesUserProxyUsers to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementManagedDatabasesUserProxyUsers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_proxy_users#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabasesUserProxyUsers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList">DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.proxyUserCollection">ProxyUserCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList">DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.managedDatabaseIdInput">ManagedDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.opcNamedCredentialIdInput">OpcNamedCredentialIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.userNameInput">UserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.opcNamedCredentialId">OpcNamedCredentialId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.userName">UserName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.filter"></a>

```csharp
public DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList">DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList</a>

---

##### `ProxyUserCollection`<sup>Required</sup> <a name="ProxyUserCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.proxyUserCollection"></a>

```csharp
public DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList ProxyUserCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList">DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManagedDatabaseIdInput`<sup>Optional</sup> <a name="ManagedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.managedDatabaseIdInput"></a>

```csharp
public string ManagedDatabaseIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OpcNamedCredentialIdInput`<sup>Optional</sup> <a name="OpcNamedCredentialIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.opcNamedCredentialIdInput"></a>

```csharp
public string OpcNamedCredentialIdInput { get; }
```

- *Type:* string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.userNameInput"></a>

```csharp
public string UserNameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.managedDatabaseId"></a>

```csharp
public string ManagedDatabaseId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OpcNamedCredentialId`<sup>Required</sup> <a name="OpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.opcNamedCredentialId"></a>

```csharp
public string OpcNamedCredentialId { get; }
```

- *Type:* string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.userName"></a>

```csharp
public string UserName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsers.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig <a name="DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ManagedDatabaseId,
    string UserName,
    object Filter = null,
    string Id = null,
    string Name = null,
    string OpcNamedCredentialId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_proxy_users#managed_database_id DataOciDatabaseManagementManagedDatabasesUserProxyUsers#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.userName">UserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_proxy_users#user_name DataOciDatabaseManagementManagedDatabasesUserProxyUsers#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_proxy_users#id DataOciDatabaseManagementManagedDatabasesUserProxyUsers#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_proxy_users#name DataOciDatabaseManagementManagedDatabasesUserProxyUsers#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.opcNamedCredentialId">OpcNamedCredentialId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_proxy_users#opc_named_credential_id DataOciDatabaseManagementManagedDatabasesUserProxyUsers#opc_named_credential_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.managedDatabaseId"></a>

```csharp
public string ManagedDatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_proxy_users#managed_database_id DataOciDatabaseManagementManagedDatabasesUserProxyUsers#managed_database_id}.

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.userName"></a>

```csharp
public string UserName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_proxy_users#user_name DataOciDatabaseManagementManagedDatabasesUserProxyUsers#user_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_proxy_users#filter DataOciDatabaseManagementManagedDatabasesUserProxyUsers#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_proxy_users#id DataOciDatabaseManagementManagedDatabasesUserProxyUsers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_proxy_users#name DataOciDatabaseManagementManagedDatabasesUserProxyUsers#name}.

---

##### `OpcNamedCredentialId`<sup>Optional</sup> <a name="OpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersConfig.property.opcNamedCredentialId"></a>

```csharp
public string OpcNamedCredentialId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_proxy_users#opc_named_credential_id DataOciDatabaseManagementManagedDatabasesUserProxyUsers#opc_named_credential_id}.

---

### DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilter <a name="DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_proxy_users#name DataOciDatabaseManagementManagedDatabasesUserProxyUsers#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_proxy_users#values DataOciDatabaseManagementManagedDatabasesUserProxyUsers#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_proxy_users#regex DataOciDatabaseManagementManagedDatabasesUserProxyUsers#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_proxy_users#name DataOciDatabaseManagementManagedDatabasesUserProxyUsers#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_proxy_users#values DataOciDatabaseManagementManagedDatabasesUserProxyUsers#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_databases_user_proxy_users#regex DataOciDatabaseManagementManagedDatabasesUserProxyUsers#regex}.

---

### DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollection <a name="DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollection {

};
```


### DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItems <a name="DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList <a name="DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.get"></a>

```csharp
private DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference <a name="DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList <a name="DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList.get"></a>

```csharp
private DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.property.authentication">Authentication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.property.flags">Flags</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItems">DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.property.authentication"></a>

```csharp
public string Authentication { get; }
```

- *Type:* string

---

##### `Flags`<sup>Required</sup> <a name="Flags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.property.flags"></a>

```csharp
public string Flags { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItems">DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItems</a>

---


### DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList <a name="DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList.get"></a>

```csharp
private DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference <a name="DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList">DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollection">DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.property.items"></a>

```csharp
public DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList">DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabasesUserProxyUsers.DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollection">DataOciDatabaseManagementManagedDatabasesUserProxyUsersProxyUserCollection</a>

---



