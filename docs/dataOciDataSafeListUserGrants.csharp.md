# `dataOciDataSafeListUserGrants` Submodule <a name="`dataOciDataSafeListUserGrants` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeListUserGrants <a name="DataOciDataSafeListUserGrants" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants oci_data_safe_list_user_grants}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeListUserGrants(Construct Scope, string Id, DataOciDataSafeListUserGrantsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig">DataOciDataSafeListUserGrantsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig">DataOciDataSafeListUserGrantsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetDepthLevel">ResetDepthLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetDepthLevelGreaterThanOrEqualTo">ResetDepthLevelGreaterThanOrEqualTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetDepthLevelLessThan">ResetDepthLevelLessThan</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetGrantKey">ResetGrantKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetGrantName">ResetGrantName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetPrivilegeCategory">ResetPrivilegeCategory</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetPrivilegeType">ResetPrivilegeType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetDepthLevel` <a name="ResetDepthLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetDepthLevel"></a>

```csharp
private void ResetDepthLevel()
```

##### `ResetDepthLevelGreaterThanOrEqualTo` <a name="ResetDepthLevelGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetDepthLevelGreaterThanOrEqualTo"></a>

```csharp
private void ResetDepthLevelGreaterThanOrEqualTo()
```

##### `ResetDepthLevelLessThan` <a name="ResetDepthLevelLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetDepthLevelLessThan"></a>

```csharp
private void ResetDepthLevelLessThan()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetGrantKey` <a name="ResetGrantKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetGrantKey"></a>

```csharp
private void ResetGrantKey()
```

##### `ResetGrantName` <a name="ResetGrantName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetGrantName"></a>

```csharp
private void ResetGrantName()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPrivilegeCategory` <a name="ResetPrivilegeCategory" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetPrivilegeCategory"></a>

```csharp
private void ResetPrivilegeCategory()
```

##### `ResetPrivilegeType` <a name="ResetPrivilegeType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.resetPrivilegeType"></a>

```csharp
private void ResetPrivilegeType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeListUserGrants resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeListUserGrants.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeListUserGrants.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeListUserGrants.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeListUserGrants.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDataSafeListUserGrants resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeListUserGrants to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeListUserGrants that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeListUserGrants to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList">DataOciDataSafeListUserGrantsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.grants">Grants</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList">DataOciDataSafeListUserGrantsGrantsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevelGreaterThanOrEqualToInput">DepthLevelGreaterThanOrEqualToInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevelInput">DepthLevelInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevelLessThanInput">DepthLevelLessThanInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.grantKeyInput">GrantKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.grantNameInput">GrantNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.privilegeCategoryInput">PrivilegeCategoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.privilegeTypeInput">PrivilegeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.userAssessmentIdInput">UserAssessmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.userKeyInput">UserKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevel">DepthLevel</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevelGreaterThanOrEqualTo">DepthLevelGreaterThanOrEqualTo</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevelLessThan">DepthLevelLessThan</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.grantKey">GrantKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.grantName">GrantName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.privilegeCategory">PrivilegeCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.privilegeType">PrivilegeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.userAssessmentId">UserAssessmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.userKey">UserKey</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.filter"></a>

```csharp
public DataOciDataSafeListUserGrantsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList">DataOciDataSafeListUserGrantsFilterList</a>

---

##### `Grants`<sup>Required</sup> <a name="Grants" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.grants"></a>

```csharp
public DataOciDataSafeListUserGrantsGrantsList Grants { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList">DataOciDataSafeListUserGrantsGrantsList</a>

---

##### `DepthLevelGreaterThanOrEqualToInput`<sup>Optional</sup> <a name="DepthLevelGreaterThanOrEqualToInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevelGreaterThanOrEqualToInput"></a>

```csharp
public double DepthLevelGreaterThanOrEqualToInput { get; }
```

- *Type:* double

---

##### `DepthLevelInput`<sup>Optional</sup> <a name="DepthLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevelInput"></a>

```csharp
public double DepthLevelInput { get; }
```

- *Type:* double

---

##### `DepthLevelLessThanInput`<sup>Optional</sup> <a name="DepthLevelLessThanInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevelLessThanInput"></a>

```csharp
public double DepthLevelLessThanInput { get; }
```

- *Type:* double

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `GrantKeyInput`<sup>Optional</sup> <a name="GrantKeyInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.grantKeyInput"></a>

```csharp
public string GrantKeyInput { get; }
```

- *Type:* string

---

##### `GrantNameInput`<sup>Optional</sup> <a name="GrantNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.grantNameInput"></a>

```csharp
public string GrantNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `PrivilegeCategoryInput`<sup>Optional</sup> <a name="PrivilegeCategoryInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.privilegeCategoryInput"></a>

```csharp
public string PrivilegeCategoryInput { get; }
```

- *Type:* string

---

##### `PrivilegeTypeInput`<sup>Optional</sup> <a name="PrivilegeTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.privilegeTypeInput"></a>

```csharp
public string PrivilegeTypeInput { get; }
```

- *Type:* string

---

##### `UserAssessmentIdInput`<sup>Optional</sup> <a name="UserAssessmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.userAssessmentIdInput"></a>

```csharp
public string UserAssessmentIdInput { get; }
```

- *Type:* string

---

##### `UserKeyInput`<sup>Optional</sup> <a name="UserKeyInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.userKeyInput"></a>

```csharp
public string UserKeyInput { get; }
```

- *Type:* string

---

##### `DepthLevel`<sup>Required</sup> <a name="DepthLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevel"></a>

```csharp
public double DepthLevel { get; }
```

- *Type:* double

---

##### `DepthLevelGreaterThanOrEqualTo`<sup>Required</sup> <a name="DepthLevelGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevelGreaterThanOrEqualTo"></a>

```csharp
public double DepthLevelGreaterThanOrEqualTo { get; }
```

- *Type:* double

---

##### `DepthLevelLessThan`<sup>Required</sup> <a name="DepthLevelLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.depthLevelLessThan"></a>

```csharp
public double DepthLevelLessThan { get; }
```

- *Type:* double

---

##### `GrantKey`<sup>Required</sup> <a name="GrantKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.grantKey"></a>

```csharp
public string GrantKey { get; }
```

- *Type:* string

---

##### `GrantName`<sup>Required</sup> <a name="GrantName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.grantName"></a>

```csharp
public string GrantName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `PrivilegeCategory`<sup>Required</sup> <a name="PrivilegeCategory" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.privilegeCategory"></a>

```csharp
public string PrivilegeCategory { get; }
```

- *Type:* string

---

##### `PrivilegeType`<sup>Required</sup> <a name="PrivilegeType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.privilegeType"></a>

```csharp
public string PrivilegeType { get; }
```

- *Type:* string

---

##### `UserAssessmentId`<sup>Required</sup> <a name="UserAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.userAssessmentId"></a>

```csharp
public string UserAssessmentId { get; }
```

- *Type:* string

---

##### `UserKey`<sup>Required</sup> <a name="UserKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.userKey"></a>

```csharp
public string UserKey { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrants.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeListUserGrantsConfig <a name="DataOciDataSafeListUserGrantsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeListUserGrantsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string UserAssessmentId,
    string UserKey,
    double DepthLevel = null,
    double DepthLevelGreaterThanOrEqualTo = null,
    double DepthLevelLessThan = null,
    object Filter = null,
    string GrantKey = null,
    string GrantName = null,
    string Id = null,
    string PrivilegeCategory = null,
    string PrivilegeType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.userAssessmentId">UserAssessmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#user_assessment_id DataOciDataSafeListUserGrants#user_assessment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.userKey">UserKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#user_key DataOciDataSafeListUserGrants#user_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.depthLevel">DepthLevel</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#depth_level DataOciDataSafeListUserGrants#depth_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.depthLevelGreaterThanOrEqualTo">DepthLevelGreaterThanOrEqualTo</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#depth_level_greater_than_or_equal_to DataOciDataSafeListUserGrants#depth_level_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.depthLevelLessThan">DepthLevelLessThan</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#depth_level_less_than DataOciDataSafeListUserGrants#depth_level_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.grantKey">GrantKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#grant_key DataOciDataSafeListUserGrants#grant_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.grantName">GrantName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#grant_name DataOciDataSafeListUserGrants#grant_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#id DataOciDataSafeListUserGrants#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.privilegeCategory">PrivilegeCategory</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#privilege_category DataOciDataSafeListUserGrants#privilege_category}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.privilegeType">PrivilegeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#privilege_type DataOciDataSafeListUserGrants#privilege_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `UserAssessmentId`<sup>Required</sup> <a name="UserAssessmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.userAssessmentId"></a>

```csharp
public string UserAssessmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#user_assessment_id DataOciDataSafeListUserGrants#user_assessment_id}.

---

##### `UserKey`<sup>Required</sup> <a name="UserKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.userKey"></a>

```csharp
public string UserKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#user_key DataOciDataSafeListUserGrants#user_key}.

---

##### `DepthLevel`<sup>Optional</sup> <a name="DepthLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.depthLevel"></a>

```csharp
public double DepthLevel { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#depth_level DataOciDataSafeListUserGrants#depth_level}.

---

##### `DepthLevelGreaterThanOrEqualTo`<sup>Optional</sup> <a name="DepthLevelGreaterThanOrEqualTo" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.depthLevelGreaterThanOrEqualTo"></a>

```csharp
public double DepthLevelGreaterThanOrEqualTo { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#depth_level_greater_than_or_equal_to DataOciDataSafeListUserGrants#depth_level_greater_than_or_equal_to}.

---

##### `DepthLevelLessThan`<sup>Optional</sup> <a name="DepthLevelLessThan" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.depthLevelLessThan"></a>

```csharp
public double DepthLevelLessThan { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#depth_level_less_than DataOciDataSafeListUserGrants#depth_level_less_than}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#filter DataOciDataSafeListUserGrants#filter}

---

##### `GrantKey`<sup>Optional</sup> <a name="GrantKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.grantKey"></a>

```csharp
public string GrantKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#grant_key DataOciDataSafeListUserGrants#grant_key}.

---

##### `GrantName`<sup>Optional</sup> <a name="GrantName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.grantName"></a>

```csharp
public string GrantName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#grant_name DataOciDataSafeListUserGrants#grant_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#id DataOciDataSafeListUserGrants#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PrivilegeCategory`<sup>Optional</sup> <a name="PrivilegeCategory" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.privilegeCategory"></a>

```csharp
public string PrivilegeCategory { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#privilege_category DataOciDataSafeListUserGrants#privilege_category}.

---

##### `PrivilegeType`<sup>Optional</sup> <a name="PrivilegeType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsConfig.property.privilegeType"></a>

```csharp
public string PrivilegeType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#privilege_type DataOciDataSafeListUserGrants#privilege_type}.

---

### DataOciDataSafeListUserGrantsFilter <a name="DataOciDataSafeListUserGrantsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeListUserGrantsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#name DataOciDataSafeListUserGrants#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#values DataOciDataSafeListUserGrants#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#regex DataOciDataSafeListUserGrants#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#name DataOciDataSafeListUserGrants#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#values DataOciDataSafeListUserGrants#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_list_user_grants#regex DataOciDataSafeListUserGrants#regex}.

---

### DataOciDataSafeListUserGrantsGrants <a name="DataOciDataSafeListUserGrantsGrants" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrants"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrants.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeListUserGrantsGrants {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeListUserGrantsFilterList <a name="DataOciDataSafeListUserGrantsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeListUserGrantsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.get"></a>

```csharp
private DataOciDataSafeListUserGrantsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataSafeListUserGrantsFilterOutputReference <a name="DataOciDataSafeListUserGrantsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeListUserGrantsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataSafeListUserGrantsGrantsList <a name="DataOciDataSafeListUserGrantsGrantsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeListUserGrantsGrantsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.get"></a>

```csharp
private DataOciDataSafeListUserGrantsGrantsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeListUserGrantsGrantsOutputReference <a name="DataOciDataSafeListUserGrantsGrantsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeListUserGrantsGrantsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.depthLevel">DepthLevel</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.grantName">GrantName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.privilegeCategory">PrivilegeCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.privilegeType">PrivilegeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrants">DataOciDataSafeListUserGrantsGrants</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DepthLevel`<sup>Required</sup> <a name="DepthLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.depthLevel"></a>

```csharp
public double DepthLevel { get; }
```

- *Type:* double

---

##### `GrantName`<sup>Required</sup> <a name="GrantName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.grantName"></a>

```csharp
public string GrantName { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `PrivilegeCategory`<sup>Required</sup> <a name="PrivilegeCategory" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.privilegeCategory"></a>

```csharp
public string PrivilegeCategory { get; }
```

- *Type:* string

---

##### `PrivilegeType`<sup>Required</sup> <a name="PrivilegeType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.privilegeType"></a>

```csharp
public string PrivilegeType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrantsOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeListUserGrantsGrants InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeListUserGrants.DataOciDataSafeListUserGrantsGrants">DataOciDataSafeListUserGrantsGrants</a>

---



