# `dataOciDataSafeSensitiveDataModelSensitiveSchemas` Submodule <a name="`dataOciDataSafeSensitiveDataModelSensitiveSchemas` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSensitiveDataModelSensitiveSchemas <a name="DataOciDataSafeSensitiveDataModelSensitiveSchemas" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas oci_data_safe_sensitive_data_model_sensitive_schemas}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSensitiveDataModelSensitiveSchemas(Construct Scope, string Id, DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig">DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig">DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.resetSchemaName">ResetSchemaName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSchemaName` <a name="ResetSchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.resetSchemaName"></a>

```csharp
private void ResetSchemaName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSensitiveDataModelSensitiveSchemas resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSensitiveDataModelSensitiveSchemas.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSensitiveDataModelSensitiveSchemas.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSensitiveDataModelSensitiveSchemas.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSensitiveDataModelSensitiveSchemas.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDataSafeSensitiveDataModelSensitiveSchemas resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeSensitiveDataModelSensitiveSchemas to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeSensitiveDataModelSensitiveSchemas that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSensitiveDataModelSensitiveSchemas to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList">DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.sensitiveSchemaCollection">SensitiveSchemaCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList">DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.schemaNameInput">SchemaNameInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.sensitiveDataModelIdInput">SensitiveDataModelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.schemaName">SchemaName</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.sensitiveDataModelId">SensitiveDataModelId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.filter"></a>

```csharp
public DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList">DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList</a>

---

##### `SensitiveSchemaCollection`<sup>Required</sup> <a name="SensitiveSchemaCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.sensitiveSchemaCollection"></a>

```csharp
public DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList SensitiveSchemaCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList">DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SchemaNameInput`<sup>Optional</sup> <a name="SchemaNameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.schemaNameInput"></a>

```csharp
public string[] SchemaNameInput { get; }
```

- *Type:* string[]

---

##### `SensitiveDataModelIdInput`<sup>Optional</sup> <a name="SensitiveDataModelIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.sensitiveDataModelIdInput"></a>

```csharp
public string SensitiveDataModelIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.schemaName"></a>

```csharp
public string[] SchemaName { get; }
```

- *Type:* string[]

---

##### `SensitiveDataModelId`<sup>Required</sup> <a name="SensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.sensitiveDataModelId"></a>

```csharp
public string SensitiveDataModelId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemas.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig <a name="DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string SensitiveDataModelId,
    object Filter = null,
    string Id = null,
    string[] SchemaName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.sensitiveDataModelId">SensitiveDataModelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas#sensitive_data_model_id DataOciDataSafeSensitiveDataModelSensitiveSchemas#sensitive_data_model_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas#id DataOciDataSafeSensitiveDataModelSensitiveSchemas#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.schemaName">SchemaName</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas#schema_name DataOciDataSafeSensitiveDataModelSensitiveSchemas#schema_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `SensitiveDataModelId`<sup>Required</sup> <a name="SensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.sensitiveDataModelId"></a>

```csharp
public string SensitiveDataModelId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas#sensitive_data_model_id DataOciDataSafeSensitiveDataModelSensitiveSchemas#sensitive_data_model_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas#filter DataOciDataSafeSensitiveDataModelSensitiveSchemas#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas#id DataOciDataSafeSensitiveDataModelSensitiveSchemas#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SchemaName`<sup>Optional</sup> <a name="SchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasConfig.property.schemaName"></a>

```csharp
public string[] SchemaName { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas#schema_name DataOciDataSafeSensitiveDataModelSensitiveSchemas#schema_name}.

---

### DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter <a name="DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas#name DataOciDataSafeSensitiveDataModelSensitiveSchemas#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas#values DataOciDataSafeSensitiveDataModelSensitiveSchemas#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas#regex DataOciDataSafeSensitiveDataModelSensitiveSchemas#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas#name DataOciDataSafeSensitiveDataModelSensitiveSchemas#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas#values DataOciDataSafeSensitiveDataModelSensitiveSchemas#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_model_sensitive_schemas#regex DataOciDataSafeSensitiveDataModelSensitiveSchemas#regex}.

---

### DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollection <a name="DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollection {

};
```


### DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItems <a name="DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList <a name="DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.get"></a>

```csharp
private DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference <a name="DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList <a name="DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.get"></a>

```csharp
private DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference <a name="DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItems">DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItems">DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItems</a>

---


### DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList <a name="DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.get"></a>

```csharp
private DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference <a name="DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList">DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollection">DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.property.items"></a>

```csharp
public DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList">DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelSensitiveSchemas.DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollection">DataOciDataSafeSensitiveDataModelSensitiveSchemasSensitiveSchemaCollection</a>

---



