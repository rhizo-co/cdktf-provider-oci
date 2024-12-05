# `dataOciDataSafeSensitiveDataModelsSensitiveColumn` Submodule <a name="`dataOciDataSafeSensitiveDataModelsSensitiveColumn` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSensitiveDataModelsSensitiveColumn <a name="DataOciDataSafeSensitiveDataModelsSensitiveColumn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_column oci_data_safe_sensitive_data_models_sensitive_column}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSensitiveDataModelsSensitiveColumn(Construct Scope, string Id, DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig">DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig">DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSensitiveDataModelsSensitiveColumn resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSensitiveDataModelsSensitiveColumn.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSensitiveDataModelsSensitiveColumn.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSensitiveDataModelsSensitiveColumn.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciDataSafeSensitiveDataModelsSensitiveColumn.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciDataSafeSensitiveDataModelsSensitiveColumn resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciDataSafeSensitiveDataModelsSensitiveColumn to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciDataSafeSensitiveDataModelsSensitiveColumn that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_column#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSensitiveDataModelsSensitiveColumn to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.appDefinedChildColumnKeys">AppDefinedChildColumnKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.appName">AppName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.columnGroups">ColumnGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.columnName">ColumnName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.dataType">DataType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.dbDefinedChildColumnKeys">DbDefinedChildColumnKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.estimatedDataValueCount">EstimatedDataValueCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.object">Object</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.objectType">ObjectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.parentColumnKeys">ParentColumnKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.relationType">RelationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.sampleDataValues">SampleDataValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.schemaName">SchemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.sensitiveTypeId">SensitiveTypeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.sensitiveColumnKeyInput">SensitiveColumnKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.sensitiveDataModelIdInput">SensitiveDataModelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.sensitiveColumnKey">SensitiveColumnKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.sensitiveDataModelId">SensitiveDataModelId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AppDefinedChildColumnKeys`<sup>Required</sup> <a name="AppDefinedChildColumnKeys" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.appDefinedChildColumnKeys"></a>

```csharp
public string[] AppDefinedChildColumnKeys { get; }
```

- *Type:* string[]

---

##### `AppName`<sup>Required</sup> <a name="AppName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.appName"></a>

```csharp
public string AppName { get; }
```

- *Type:* string

---

##### `ColumnGroups`<sup>Required</sup> <a name="ColumnGroups" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.columnGroups"></a>

```csharp
public string[] ColumnGroups { get; }
```

- *Type:* string[]

---

##### `ColumnName`<sup>Required</sup> <a name="ColumnName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.columnName"></a>

```csharp
public string ColumnName { get; }
```

- *Type:* string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.dataType"></a>

```csharp
public string DataType { get; }
```

- *Type:* string

---

##### `DbDefinedChildColumnKeys`<sup>Required</sup> <a name="DbDefinedChildColumnKeys" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.dbDefinedChildColumnKeys"></a>

```csharp
public string[] DbDefinedChildColumnKeys { get; }
```

- *Type:* string[]

---

##### `EstimatedDataValueCount`<sup>Required</sup> <a name="EstimatedDataValueCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.estimatedDataValueCount"></a>

```csharp
public string EstimatedDataValueCount { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.object"></a>

```csharp
public string Object { get; }
```

- *Type:* string

---

##### `ObjectType`<sup>Required</sup> <a name="ObjectType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.objectType"></a>

```csharp
public string ObjectType { get; }
```

- *Type:* string

---

##### `ParentColumnKeys`<sup>Required</sup> <a name="ParentColumnKeys" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.parentColumnKeys"></a>

```csharp
public string[] ParentColumnKeys { get; }
```

- *Type:* string[]

---

##### `RelationType`<sup>Required</sup> <a name="RelationType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.relationType"></a>

```csharp
public string RelationType { get; }
```

- *Type:* string

---

##### `SampleDataValues`<sup>Required</sup> <a name="SampleDataValues" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.sampleDataValues"></a>

```csharp
public string[] SampleDataValues { get; }
```

- *Type:* string[]

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.schemaName"></a>

```csharp
public string SchemaName { get; }
```

- *Type:* string

---

##### `SensitiveTypeId`<sup>Required</sup> <a name="SensitiveTypeId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.sensitiveTypeId"></a>

```csharp
public string SensitiveTypeId { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `SensitiveColumnKeyInput`<sup>Optional</sup> <a name="SensitiveColumnKeyInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.sensitiveColumnKeyInput"></a>

```csharp
public string SensitiveColumnKeyInput { get; }
```

- *Type:* string

---

##### `SensitiveDataModelIdInput`<sup>Optional</sup> <a name="SensitiveDataModelIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.sensitiveDataModelIdInput"></a>

```csharp
public string SensitiveDataModelIdInput { get; }
```

- *Type:* string

---

##### `SensitiveColumnKey`<sup>Required</sup> <a name="SensitiveColumnKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.sensitiveColumnKey"></a>

```csharp
public string SensitiveColumnKey { get; }
```

- *Type:* string

---

##### `SensitiveDataModelId`<sup>Required</sup> <a name="SensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.sensitiveDataModelId"></a>

```csharp
public string SensitiveDataModelId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumn.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig <a name="DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string SensitiveColumnKey,
    string SensitiveDataModelId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.sensitiveColumnKey">SensitiveColumnKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_column#sensitive_column_key DataOciDataSafeSensitiveDataModelsSensitiveColumn#sensitive_column_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.sensitiveDataModelId">SensitiveDataModelId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_column#sensitive_data_model_id DataOciDataSafeSensitiveDataModelsSensitiveColumn#sensitive_data_model_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `SensitiveColumnKey`<sup>Required</sup> <a name="SensitiveColumnKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.sensitiveColumnKey"></a>

```csharp
public string SensitiveColumnKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_column#sensitive_column_key DataOciDataSafeSensitiveDataModelsSensitiveColumn#sensitive_column_key}.

---

##### `SensitiveDataModelId`<sup>Required</sup> <a name="SensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSensitiveDataModelsSensitiveColumn.DataOciDataSafeSensitiveDataModelsSensitiveColumnConfig.property.sensitiveDataModelId"></a>

```csharp
public string SensitiveDataModelId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sensitive_data_models_sensitive_column#sensitive_data_model_id DataOciDataSafeSensitiveDataModelsSensitiveColumn#sensitive_data_model_id}.

---



