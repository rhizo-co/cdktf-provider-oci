# `dataOciLicenseManagerTopUtilizedProductLicenses` Submodule <a name="`dataOciLicenseManagerTopUtilizedProductLicenses` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLicenseManagerTopUtilizedProductLicenses <a name="DataOciLicenseManagerTopUtilizedProductLicenses" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_product_licenses oci_license_manager_top_utilized_product_licenses}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLicenseManagerTopUtilizedProductLicenses(Construct Scope, string Id, DataOciLicenseManagerTopUtilizedProductLicensesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesConfig">DataOciLicenseManagerTopUtilizedProductLicensesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesConfig">DataOciLicenseManagerTopUtilizedProductLicensesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.resetIsCompartmentIdInSubtree">ResetIsCompartmentIdInSubtree</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsCompartmentIdInSubtree` <a name="ResetIsCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.resetIsCompartmentIdInSubtree"></a>

```csharp
private void ResetIsCompartmentIdInSubtree()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLicenseManagerTopUtilizedProductLicenses resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLicenseManagerTopUtilizedProductLicenses.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLicenseManagerTopUtilizedProductLicenses.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLicenseManagerTopUtilizedProductLicenses.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLicenseManagerTopUtilizedProductLicenses.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciLicenseManagerTopUtilizedProductLicenses resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciLicenseManagerTopUtilizedProductLicenses to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciLicenseManagerTopUtilizedProductLicenses that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_product_licenses#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLicenseManagerTopUtilizedProductLicenses to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList">DataOciLicenseManagerTopUtilizedProductLicensesItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.isCompartmentIdInSubtreeInput">IsCompartmentIdInSubtreeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.isCompartmentIdInSubtree">IsCompartmentIdInSubtree</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.items"></a>

```csharp
public DataOciLicenseManagerTopUtilizedProductLicensesItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList">DataOciLicenseManagerTopUtilizedProductLicensesItemsList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsCompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="IsCompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.isCompartmentIdInSubtreeInput"></a>

```csharp
public object IsCompartmentIdInSubtreeInput { get; }
```

- *Type:* object

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsCompartmentIdInSubtree`<sup>Required</sup> <a name="IsCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.isCompartmentIdInSubtree"></a>

```csharp
public object IsCompartmentIdInSubtree { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicenses.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLicenseManagerTopUtilizedProductLicensesConfig <a name="DataOciLicenseManagerTopUtilizedProductLicensesConfig" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLicenseManagerTopUtilizedProductLicensesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string Id = null,
    object IsCompartmentIdInSubtree = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_product_licenses#compartment_id DataOciLicenseManagerTopUtilizedProductLicenses#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_product_licenses#id DataOciLicenseManagerTopUtilizedProductLicenses#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesConfig.property.isCompartmentIdInSubtree">IsCompartmentIdInSubtree</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_product_licenses#is_compartment_id_in_subtree DataOciLicenseManagerTopUtilizedProductLicenses#is_compartment_id_in_subtree}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_product_licenses#compartment_id DataOciLicenseManagerTopUtilizedProductLicenses#compartment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_product_licenses#id DataOciLicenseManagerTopUtilizedProductLicenses#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsCompartmentIdInSubtree`<sup>Optional</sup> <a name="IsCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesConfig.property.isCompartmentIdInSubtree"></a>

```csharp
public object IsCompartmentIdInSubtree { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_top_utilized_product_licenses#is_compartment_id_in_subtree DataOciLicenseManagerTopUtilizedProductLicenses#is_compartment_id_in_subtree}.

---

### DataOciLicenseManagerTopUtilizedProductLicensesItems <a name="DataOciLicenseManagerTopUtilizedProductLicensesItems" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLicenseManagerTopUtilizedProductLicensesItems {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLicenseManagerTopUtilizedProductLicensesItemsList <a name="DataOciLicenseManagerTopUtilizedProductLicensesItemsList" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLicenseManagerTopUtilizedProductLicensesItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList.get"></a>

```csharp
private DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference <a name="DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.property.isUnlimited">IsUnlimited</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.property.productLicenseId">ProductLicenseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.property.productType">ProductType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.property.totalLicenseUnitCount">TotalLicenseUnitCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.property.totalUnitsConsumed">TotalUnitsConsumed</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.property.unitType">UnitType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItems">DataOciLicenseManagerTopUtilizedProductLicensesItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsUnlimited`<sup>Required</sup> <a name="IsUnlimited" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.property.isUnlimited"></a>

```csharp
public IResolvable IsUnlimited { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ProductLicenseId`<sup>Required</sup> <a name="ProductLicenseId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.property.productLicenseId"></a>

```csharp
public string ProductLicenseId { get; }
```

- *Type:* string

---

##### `ProductType`<sup>Required</sup> <a name="ProductType" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.property.productType"></a>

```csharp
public string ProductType { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `TotalLicenseUnitCount`<sup>Required</sup> <a name="TotalLicenseUnitCount" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.property.totalLicenseUnitCount"></a>

```csharp
public double TotalLicenseUnitCount { get; }
```

- *Type:* double

---

##### `TotalUnitsConsumed`<sup>Required</sup> <a name="TotalUnitsConsumed" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.property.totalUnitsConsumed"></a>

```csharp
public double TotalUnitsConsumed { get; }
```

- *Type:* double

---

##### `UnitType`<sup>Required</sup> <a name="UnitType" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.property.unitType"></a>

```csharp
public string UnitType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciLicenseManagerTopUtilizedProductLicensesItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerTopUtilizedProductLicenses.DataOciLicenseManagerTopUtilizedProductLicensesItems">DataOciLicenseManagerTopUtilizedProductLicensesItems</a>

---



