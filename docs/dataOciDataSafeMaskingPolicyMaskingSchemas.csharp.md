# `dataOciDataSafeMaskingPolicyMaskingSchemas` Submodule <a name="`dataOciDataSafeMaskingPolicyMaskingSchemas` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeMaskingPolicyMaskingSchemas <a name="DataOciDataSafeMaskingPolicyMaskingSchemas" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_schemas oci_data_safe_masking_policy_masking_schemas}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeMaskingPolicyMaskingSchemas(Construct Scope, string Id, DataOciDataSafeMaskingPolicyMaskingSchemasConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig">DataOciDataSafeMaskingPolicyMaskingSchemasConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig">DataOciDataSafeMaskingPolicyMaskingSchemasConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.resetSchemaName">ResetSchemaName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.resetSchemaName"></a>

```csharp
private void ResetSchemaName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeMaskingPolicyMaskingSchemas resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeMaskingPolicyMaskingSchemas.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeMaskingPolicyMaskingSchemas.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeMaskingPolicyMaskingSchemas.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeMaskingPolicyMaskingSchemas.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDataSafeMaskingPolicyMaskingSchemas resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeMaskingPolicyMaskingSchemas to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeMaskingPolicyMaskingSchemas that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_schemas#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeMaskingPolicyMaskingSchemas to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList">DataOciDataSafeMaskingPolicyMaskingSchemasFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.maskingSchemaCollection">MaskingSchemaCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList">DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.maskingPolicyIdInput">MaskingPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.schemaNameInput">SchemaNameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.maskingPolicyId">MaskingPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.schemaName">SchemaName</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.filter"></a>

```csharp
public DataOciDataSafeMaskingPolicyMaskingSchemasFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList">DataOciDataSafeMaskingPolicyMaskingSchemasFilterList</a>

---

##### `MaskingSchemaCollection`<sup>Required</sup> <a name="MaskingSchemaCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.maskingSchemaCollection"></a>

```csharp
public DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList MaskingSchemaCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList">DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaskingPolicyIdInput`<sup>Optional</sup> <a name="MaskingPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.maskingPolicyIdInput"></a>

```csharp
public string MaskingPolicyIdInput { get; }
```

- *Type:* string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.schemaNameInput"></a>

```csharp
public string[] SchemaNameInput { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaskingPolicyId`<sup>Required</sup> <a name="MaskingPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.maskingPolicyId"></a>

```csharp
public string MaskingPolicyId { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.schemaName"></a>

```csharp
public string[] SchemaName { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemas.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeMaskingPolicyMaskingSchemasConfig <a name="DataOciDataSafeMaskingPolicyMaskingSchemasConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeMaskingPolicyMaskingSchemasConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string MaskingPolicyId,
    object Filter = null,
    string Id = null,
    string[] SchemaName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.maskingPolicyId">MaskingPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_schemas#masking_policy_id DataOciDataSafeMaskingPolicyMaskingSchemas#masking_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_schemas#id DataOciDataSafeMaskingPolicyMaskingSchemas#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.schemaName">SchemaName</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_schemas#schema_name DataOciDataSafeMaskingPolicyMaskingSchemas#schema_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `MaskingPolicyId`<sup>Required</sup> <a name="MaskingPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.maskingPolicyId"></a>

```csharp
public string MaskingPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_schemas#masking_policy_id DataOciDataSafeMaskingPolicyMaskingSchemas#masking_policy_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_schemas#filter DataOciDataSafeMaskingPolicyMaskingSchemas#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_schemas#id DataOciDataSafeMaskingPolicyMaskingSchemas#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasConfig.property.schemaName"></a>

```csharp
public string[] SchemaName { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_schemas#schema_name DataOciDataSafeMaskingPolicyMaskingSchemas#schema_name}.

---

### DataOciDataSafeMaskingPolicyMaskingSchemasFilter <a name="DataOciDataSafeMaskingPolicyMaskingSchemasFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeMaskingPolicyMaskingSchemasFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_schemas#name DataOciDataSafeMaskingPolicyMaskingSchemas#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_schemas#values DataOciDataSafeMaskingPolicyMaskingSchemas#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_schemas#regex DataOciDataSafeMaskingPolicyMaskingSchemas#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_schemas#name DataOciDataSafeMaskingPolicyMaskingSchemas#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_schemas#values DataOciDataSafeMaskingPolicyMaskingSchemas#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_masking_schemas#regex DataOciDataSafeMaskingPolicyMaskingSchemas#regex}.

---

### DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollection <a name="DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollection {

};
```


### DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItems <a name="DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeMaskingPolicyMaskingSchemasFilterList <a name="DataOciDataSafeMaskingPolicyMaskingSchemasFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeMaskingPolicyMaskingSchemasFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.get"></a>

```csharp
private DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference <a name="DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList <a name="DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.get"></a>

```csharp
private DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference <a name="DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItems">DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItems">DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItems</a>

---


### DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList <a name="DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.get"></a>

```csharp
private DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference <a name="DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList">DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollection">DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.property.items"></a>

```csharp
public DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList">DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyMaskingSchemas.DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollection">DataOciDataSafeMaskingPolicyMaskingSchemasMaskingSchemaCollection</a>

---



