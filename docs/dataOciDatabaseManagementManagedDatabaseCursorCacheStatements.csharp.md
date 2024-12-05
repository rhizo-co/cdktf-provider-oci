# `dataOciDatabaseManagementManagedDatabaseCursorCacheStatements` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseCursorCacheStatements` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseCursorCacheStatements <a name="DataOciDatabaseManagementManagedDatabaseCursorCacheStatements" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements oci_database_management_managed_database_cursor_cache_statements}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseCursorCacheStatements(Construct Scope, string Id, DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.resetLimit">ResetLimit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.resetOpcNamedCredentialId">ResetOpcNamedCredentialId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.resetSqlText">ResetSqlText</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLimit` <a name="ResetLimit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.resetLimit"></a>

```csharp
private void ResetLimit()
```

##### `ResetOpcNamedCredentialId` <a name="ResetOpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.resetOpcNamedCredentialId"></a>

```csharp
private void ResetOpcNamedCredentialId()
```

##### `ResetSqlText` <a name="ResetSqlText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.resetSqlText"></a>

```csharp
private void ResetSqlText()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseCursorCacheStatements resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseCursorCacheStatements resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseCursorCacheStatements to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementManagedDatabaseCursorCacheStatements that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseCursorCacheStatements to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.cursorCacheStatementCollection">CursorCacheStatementCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.limitInput">LimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.managedDatabaseIdInput">ManagedDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.opcNamedCredentialIdInput">OpcNamedCredentialIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.sqlTextInput">SqlTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.limit">Limit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.opcNamedCredentialId">OpcNamedCredentialId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.sqlText">SqlText</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CursorCacheStatementCollection`<sup>Required</sup> <a name="CursorCacheStatementCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.cursorCacheStatementCollection"></a>

```csharp
public DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList CursorCacheStatementCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.filter"></a>

```csharp
public DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.limitInput"></a>

```csharp
public double LimitInput { get; }
```

- *Type:* double

---

##### `ManagedDatabaseIdInput`<sup>Optional</sup> <a name="ManagedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.managedDatabaseIdInput"></a>

```csharp
public string ManagedDatabaseIdInput { get; }
```

- *Type:* string

---

##### `OpcNamedCredentialIdInput`<sup>Optional</sup> <a name="OpcNamedCredentialIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.opcNamedCredentialIdInput"></a>

```csharp
public string OpcNamedCredentialIdInput { get; }
```

- *Type:* string

---

##### `SqlTextInput`<sup>Optional</sup> <a name="SqlTextInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.sqlTextInput"></a>

```csharp
public string SqlTextInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.limit"></a>

```csharp
public double Limit { get; }
```

- *Type:* double

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.managedDatabaseId"></a>

```csharp
public string ManagedDatabaseId { get; }
```

- *Type:* string

---

##### `OpcNamedCredentialId`<sup>Required</sup> <a name="OpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.opcNamedCredentialId"></a>

```csharp
public string OpcNamedCredentialId { get; }
```

- *Type:* string

---

##### `SqlText`<sup>Required</sup> <a name="SqlText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.sqlText"></a>

```csharp
public string SqlText { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig <a name="DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ManagedDatabaseId,
    object Filter = null,
    string Id = null,
    double Limit = null,
    string OpcNamedCredentialId = null,
    string SqlText = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#managed_database_id DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#id DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.limit">Limit</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#limit DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.opcNamedCredentialId">OpcNamedCredentialId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#opc_named_credential_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.sqlText">SqlText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#sql_text DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#sql_text}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.managedDatabaseId"></a>

```csharp
public string ManagedDatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#managed_database_id DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#managed_database_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#filter DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#id DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Limit`<sup>Optional</sup> <a name="Limit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.limit"></a>

```csharp
public double Limit { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#limit DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#limit}.

---

##### `OpcNamedCredentialId`<sup>Optional</sup> <a name="OpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.opcNamedCredentialId"></a>

```csharp
public string OpcNamedCredentialId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#opc_named_credential_id}.

---

##### `SqlText`<sup>Optional</sup> <a name="SqlText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.sqlText"></a>

```csharp
public string SqlText { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#sql_text DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#sql_text}.

---

### DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollection <a name="DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollection {

};
```


### DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItems <a name="DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItems {

};
```


### DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter <a name="DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#name DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#values DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#regex DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#name DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#values DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#regex DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList <a name="DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.get"></a>

```csharp
private DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.property.schema">Schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.property.sqlId">SqlId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.property.sqlText">SqlText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItems">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.property.schema"></a>

```csharp
public string Schema { get; }
```

- *Type:* string

---

##### `SqlId`<sup>Required</sup> <a name="SqlId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.property.sqlId"></a>

```csharp
public string SqlId { get; }
```

- *Type:* string

---

##### `SqlText`<sup>Required</sup> <a name="SqlText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.property.sqlText"></a>

```csharp
public string SqlText { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItems">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItems</a>

---


### DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList <a name="DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.get"></a>

```csharp
private DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference <a name="DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollection">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.property.items"></a>

```csharp
public DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollection">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollection</a>

---


### DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList <a name="DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.get"></a>

```csharp
private DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference <a name="DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



