# `dataOciLicenseManagerProductLicenses` Submodule <a name="`dataOciLicenseManagerProductLicenses` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLicenseManagerProductLicenses <a name="DataOciLicenseManagerProductLicenses" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_licenses oci_license_manager_product_licenses}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLicenseManagerProductLicenses(Construct Scope, string Id, DataOciLicenseManagerProductLicensesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesConfig">DataOciLicenseManagerProductLicensesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesConfig">DataOciLicenseManagerProductLicensesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.resetIsCompartmentIdInSubtree">ResetIsCompartmentIdInSubtree</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsCompartmentIdInSubtree` <a name="ResetIsCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.resetIsCompartmentIdInSubtree"></a>

```csharp
private void ResetIsCompartmentIdInSubtree()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLicenseManagerProductLicenses resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLicenseManagerProductLicenses.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLicenseManagerProductLicenses.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLicenseManagerProductLicenses.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLicenseManagerProductLicenses.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciLicenseManagerProductLicenses resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciLicenseManagerProductLicenses to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciLicenseManagerProductLicenses that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_licenses#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLicenseManagerProductLicenses to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList">DataOciLicenseManagerProductLicensesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.productLicenseCollection">ProductLicenseCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList">DataOciLicenseManagerProductLicensesProductLicenseCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.isCompartmentIdInSubtreeInput">IsCompartmentIdInSubtreeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.isCompartmentIdInSubtree">IsCompartmentIdInSubtree</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.filter"></a>

```csharp
public DataOciLicenseManagerProductLicensesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList">DataOciLicenseManagerProductLicensesFilterList</a>

---

##### `ProductLicenseCollection`<sup>Required</sup> <a name="ProductLicenseCollection" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.productLicenseCollection"></a>

```csharp
public DataOciLicenseManagerProductLicensesProductLicenseCollectionList ProductLicenseCollection { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList">DataOciLicenseManagerProductLicensesProductLicenseCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsCompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="IsCompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.isCompartmentIdInSubtreeInput"></a>

```csharp
public object IsCompartmentIdInSubtreeInput { get; }
```

- *Type:* object

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsCompartmentIdInSubtree`<sup>Required</sup> <a name="IsCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.isCompartmentIdInSubtree"></a>

```csharp
public object IsCompartmentIdInSubtree { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicenses.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLicenseManagerProductLicensesConfig <a name="DataOciLicenseManagerProductLicensesConfig" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLicenseManagerProductLicensesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    object Filter = null,
    string Id = null,
    object IsCompartmentIdInSubtree = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_licenses#compartment_id DataOciLicenseManagerProductLicenses#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_licenses#id DataOciLicenseManagerProductLicenses#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesConfig.property.isCompartmentIdInSubtree">IsCompartmentIdInSubtree</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_licenses#is_compartment_id_in_subtree DataOciLicenseManagerProductLicenses#is_compartment_id_in_subtree}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_licenses#compartment_id DataOciLicenseManagerProductLicenses#compartment_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_licenses#filter DataOciLicenseManagerProductLicenses#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_licenses#id DataOciLicenseManagerProductLicenses#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsCompartmentIdInSubtree`<sup>Optional</sup> <a name="IsCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesConfig.property.isCompartmentIdInSubtree"></a>

```csharp
public object IsCompartmentIdInSubtree { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_licenses#is_compartment_id_in_subtree DataOciLicenseManagerProductLicenses#is_compartment_id_in_subtree}.

---

### DataOciLicenseManagerProductLicensesFilter <a name="DataOciLicenseManagerProductLicensesFilter" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLicenseManagerProductLicensesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_licenses#name DataOciLicenseManagerProductLicenses#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_licenses#values DataOciLicenseManagerProductLicenses#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_licenses#regex DataOciLicenseManagerProductLicenses#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_licenses#name DataOciLicenseManagerProductLicenses#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_licenses#values DataOciLicenseManagerProductLicenses#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_licenses#regex DataOciLicenseManagerProductLicenses#regex}.

---

### DataOciLicenseManagerProductLicensesProductLicenseCollection <a name="DataOciLicenseManagerProductLicensesProductLicenseCollection" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLicenseManagerProductLicensesProductLicenseCollection {

};
```


### DataOciLicenseManagerProductLicensesProductLicenseCollectionItems <a name="DataOciLicenseManagerProductLicensesProductLicenseCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLicenseManagerProductLicensesProductLicenseCollectionItems {

};
```


### DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImages <a name="DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImages" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImages"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImages.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImages {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLicenseManagerProductLicensesFilterList <a name="DataOciLicenseManagerProductLicensesFilterList" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLicenseManagerProductLicensesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.get"></a>

```csharp
private DataOciLicenseManagerProductLicensesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciLicenseManagerProductLicensesFilterOutputReference <a name="DataOciLicenseManagerProductLicensesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLicenseManagerProductLicensesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList <a name="DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList.get"></a>

```csharp
private DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference <a name="DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.property.listingId">ListingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.property.listingName">ListingName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.property.packageVersion">PackageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.property.publisher">Publisher</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImages">DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImages</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ListingId`<sup>Required</sup> <a name="ListingId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.property.listingId"></a>

```csharp
public string ListingId { get; }
```

- *Type:* string

---

##### `ListingName`<sup>Required</sup> <a name="ListingName" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.property.listingName"></a>

```csharp
public string ListingName { get; }
```

- *Type:* string

---

##### `PackageVersion`<sup>Required</sup> <a name="PackageVersion" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.property.packageVersion"></a>

```csharp
public string PackageVersion { get; }
```

- *Type:* string

---

##### `Publisher`<sup>Required</sup> <a name="Publisher" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.property.publisher"></a>

```csharp
public string Publisher { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesOutputReference.property.internalValue"></a>

```csharp
public DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImages InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImages">DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImages</a>

---


### DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList <a name="DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList.get"></a>

```csharp
private DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference <a name="DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.activeLicenseRecordCount">ActiveLicenseRecordCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.images">Images</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList">DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.isOverSubscribed">IsOverSubscribed</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.isUnlimited">IsUnlimited</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.isVendorOracle">IsVendorOracle</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.licenseUnit">LicenseUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.statusDescription">StatusDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.totalActiveLicenseUnitCount">TotalActiveLicenseUnitCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.totalLicenseRecordCount">TotalLicenseRecordCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.totalLicenseUnitsConsumed">TotalLicenseUnitsConsumed</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.vendorName">VendorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItems">DataOciLicenseManagerProductLicensesProductLicenseCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActiveLicenseRecordCount`<sup>Required</sup> <a name="ActiveLicenseRecordCount" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.activeLicenseRecordCount"></a>

```csharp
public double ActiveLicenseRecordCount { get; }
```

- *Type:* double

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Images`<sup>Required</sup> <a name="Images" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.images"></a>

```csharp
public DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList Images { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList">DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsImagesList</a>

---

##### `IsOverSubscribed`<sup>Required</sup> <a name="IsOverSubscribed" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.isOverSubscribed"></a>

```csharp
public IResolvable IsOverSubscribed { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsUnlimited`<sup>Required</sup> <a name="IsUnlimited" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.isUnlimited"></a>

```csharp
public IResolvable IsUnlimited { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsVendorOracle`<sup>Required</sup> <a name="IsVendorOracle" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.isVendorOracle"></a>

```csharp
public IResolvable IsVendorOracle { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LicenseUnit`<sup>Required</sup> <a name="LicenseUnit" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.licenseUnit"></a>

```csharp
public string LicenseUnit { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusDescription`<sup>Required</sup> <a name="StatusDescription" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.statusDescription"></a>

```csharp
public string StatusDescription { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `TotalActiveLicenseUnitCount`<sup>Required</sup> <a name="TotalActiveLicenseUnitCount" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.totalActiveLicenseUnitCount"></a>

```csharp
public double TotalActiveLicenseUnitCount { get; }
```

- *Type:* double

---

##### `TotalLicenseRecordCount`<sup>Required</sup> <a name="TotalLicenseRecordCount" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.totalLicenseRecordCount"></a>

```csharp
public double TotalLicenseRecordCount { get; }
```

- *Type:* double

---

##### `TotalLicenseUnitsConsumed`<sup>Required</sup> <a name="TotalLicenseUnitsConsumed" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.totalLicenseUnitsConsumed"></a>

```csharp
public double TotalLicenseUnitsConsumed { get; }
```

- *Type:* double

---

##### `VendorName`<sup>Required</sup> <a name="VendorName" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.vendorName"></a>

```csharp
public string VendorName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciLicenseManagerProductLicensesProductLicenseCollectionItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItems">DataOciLicenseManagerProductLicensesProductLicenseCollectionItems</a>

---


### DataOciLicenseManagerProductLicensesProductLicenseCollectionList <a name="DataOciLicenseManagerProductLicensesProductLicenseCollectionList" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLicenseManagerProductLicensesProductLicenseCollectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList.get"></a>

```csharp
private DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference <a name="DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList">DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollection">DataOciLicenseManagerProductLicensesProductLicenseCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.property.items"></a>

```csharp
public DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList">DataOciLicenseManagerProductLicensesProductLicenseCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollectionOutputReference.property.internalValue"></a>

```csharp
public DataOciLicenseManagerProductLicensesProductLicenseCollection InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenses.DataOciLicenseManagerProductLicensesProductLicenseCollection">DataOciLicenseManagerProductLicensesProductLicenseCollection</a>

---



