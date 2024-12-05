# `dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges <a name="DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges oci_database_management_managed_database_user_consumer_group_privileges}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges(Construct Scope, string Id, DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.resetOpcNamedCredentialId">ResetOpcNamedCredentialId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetOpcNamedCredentialId` <a name="ResetOpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.resetOpcNamedCredentialId"></a>

```csharp
private void ResetOpcNamedCredentialId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.consumerGroupPrivilegeCollection">ConsumerGroupPrivilegeCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.managedDatabaseIdInput">ManagedDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.opcNamedCredentialIdInput">OpcNamedCredentialIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.userNameInput">UserNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.opcNamedCredentialId">OpcNamedCredentialId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.userName">UserName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ConsumerGroupPrivilegeCollection`<sup>Required</sup> <a name="ConsumerGroupPrivilegeCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.consumerGroupPrivilegeCollection"></a>

```csharp
public DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList ConsumerGroupPrivilegeCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.filter"></a>

```csharp
public DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ManagedDatabaseIdInput`<sup>Optional</sup> <a name="ManagedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.managedDatabaseIdInput"></a>

```csharp
public string ManagedDatabaseIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OpcNamedCredentialIdInput`<sup>Optional</sup> <a name="OpcNamedCredentialIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.opcNamedCredentialIdInput"></a>

```csharp
public string OpcNamedCredentialIdInput { get; }
```

- *Type:* string

---

##### `UserNameInput`<sup>Optional</sup> <a name="UserNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.userNameInput"></a>

```csharp
public string UserNameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.managedDatabaseId"></a>

```csharp
public string ManagedDatabaseId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OpcNamedCredentialId`<sup>Required</sup> <a name="OpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.opcNamedCredentialId"></a>

```csharp
public string OpcNamedCredentialId { get; }
```

- *Type:* string

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.userName"></a>

```csharp
public string UserName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig <a name="DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig {
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#managed_database_id DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.userName">UserName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#user_name DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#user_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#id DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#name DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.opcNamedCredentialId">OpcNamedCredentialId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#opc_named_credential_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.managedDatabaseId"></a>

```csharp
public string ManagedDatabaseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#managed_database_id DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#managed_database_id}.

---

##### `UserName`<sup>Required</sup> <a name="UserName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.userName"></a>

```csharp
public string UserName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#user_name DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#user_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#filter DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#id DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#name DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#name}.

---

##### `OpcNamedCredentialId`<sup>Optional</sup> <a name="OpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConfig.property.opcNamedCredentialId"></a>

```csharp
public string OpcNamedCredentialId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#opc_named_credential_id}.

---

### DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollection <a name="DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollection {

};
```


### DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItems <a name="DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItems {

};
```


### DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter <a name="DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#name DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#values DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#regex DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#name DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#values DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_user_consumer_group_privileges#regex DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList <a name="DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.get"></a>

```csharp
private DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.property.grantOption">GrantOption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.property.initialGroup">InitialGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItems">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GrantOption`<sup>Required</sup> <a name="GrantOption" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.property.grantOption"></a>

```csharp
public string GrantOption { get; }
```

- *Type:* string

---

##### `InitialGroup`<sup>Required</sup> <a name="InitialGroup" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.property.initialGroup"></a>

```csharp
public string InitialGroup { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItems">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItems</a>

---


### DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList <a name="DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.get"></a>

```csharp
private DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference <a name="DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollection">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.property.items"></a>

```csharp
public DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollection">DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesConsumerGroupPrivilegeCollection</a>

---


### DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList <a name="DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.get"></a>

```csharp
private DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference <a name="DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivileges.DataOciDatabaseManagementManagedDatabaseUserConsumerGroupPrivilegesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



