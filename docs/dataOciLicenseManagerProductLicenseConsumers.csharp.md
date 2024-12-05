# `dataOciLicenseManagerProductLicenseConsumers` Submodule <a name="`dataOciLicenseManagerProductLicenseConsumers` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLicenseManagerProductLicenseConsumers <a name="DataOciLicenseManagerProductLicenseConsumers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license_consumers oci_license_manager_product_license_consumers}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLicenseManagerProductLicenseConsumers(Construct Scope, string Id, DataOciLicenseManagerProductLicenseConsumersConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig">DataOciLicenseManagerProductLicenseConsumersConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig">DataOciLicenseManagerProductLicenseConsumersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.resetIsCompartmentIdInSubtree">ResetIsCompartmentIdInSubtree</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsCompartmentIdInSubtree` <a name="ResetIsCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.resetIsCompartmentIdInSubtree"></a>

```csharp
private void ResetIsCompartmentIdInSubtree()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLicenseManagerProductLicenseConsumers resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLicenseManagerProductLicenseConsumers.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLicenseManagerProductLicenseConsumers.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLicenseManagerProductLicenseConsumers.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLicenseManagerProductLicenseConsumers.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciLicenseManagerProductLicenseConsumers resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciLicenseManagerProductLicenseConsumers to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciLicenseManagerProductLicenseConsumers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license_consumers#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLicenseManagerProductLicenseConsumers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList">DataOciLicenseManagerProductLicenseConsumersItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.isCompartmentIdInSubtreeInput">IsCompartmentIdInSubtreeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.productLicenseIdInput">ProductLicenseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.isCompartmentIdInSubtree">IsCompartmentIdInSubtree</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.productLicenseId">ProductLicenseId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.items"></a>

```csharp
public DataOciLicenseManagerProductLicenseConsumersItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList">DataOciLicenseManagerProductLicenseConsumersItemsList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsCompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="IsCompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.isCompartmentIdInSubtreeInput"></a>

```csharp
public object IsCompartmentIdInSubtreeInput { get; }
```

- *Type:* object

---

##### `ProductLicenseIdInput`<sup>Optional</sup> <a name="ProductLicenseIdInput" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.productLicenseIdInput"></a>

```csharp
public string ProductLicenseIdInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsCompartmentIdInSubtree`<sup>Required</sup> <a name="IsCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.isCompartmentIdInSubtree"></a>

```csharp
public object IsCompartmentIdInSubtree { get; }
```

- *Type:* object

---

##### `ProductLicenseId`<sup>Required</sup> <a name="ProductLicenseId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.productLicenseId"></a>

```csharp
public string ProductLicenseId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumers.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLicenseManagerProductLicenseConsumersConfig <a name="DataOciLicenseManagerProductLicenseConsumersConfig" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLicenseManagerProductLicenseConsumersConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string ProductLicenseId,
    string Id = null,
    object IsCompartmentIdInSubtree = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license_consumers#compartment_id DataOciLicenseManagerProductLicenseConsumers#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.productLicenseId">ProductLicenseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license_consumers#product_license_id DataOciLicenseManagerProductLicenseConsumers#product_license_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license_consumers#id DataOciLicenseManagerProductLicenseConsumers#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.isCompartmentIdInSubtree">IsCompartmentIdInSubtree</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license_consumers#is_compartment_id_in_subtree DataOciLicenseManagerProductLicenseConsumers#is_compartment_id_in_subtree}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license_consumers#compartment_id DataOciLicenseManagerProductLicenseConsumers#compartment_id}.

---

##### `ProductLicenseId`<sup>Required</sup> <a name="ProductLicenseId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.productLicenseId"></a>

```csharp
public string ProductLicenseId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license_consumers#product_license_id DataOciLicenseManagerProductLicenseConsumers#product_license_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license_consumers#id DataOciLicenseManagerProductLicenseConsumers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsCompartmentIdInSubtree`<sup>Optional</sup> <a name="IsCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersConfig.property.isCompartmentIdInSubtree"></a>

```csharp
public object IsCompartmentIdInSubtree { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_product_license_consumers#is_compartment_id_in_subtree DataOciLicenseManagerProductLicenseConsumers#is_compartment_id_in_subtree}.

---

### DataOciLicenseManagerProductLicenseConsumersItems <a name="DataOciLicenseManagerProductLicenseConsumersItems" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLicenseManagerProductLicenseConsumersItems {

};
```


### DataOciLicenseManagerProductLicenseConsumersItemsMissingProducts <a name="DataOciLicenseManagerProductLicenseConsumersItemsMissingProducts" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProducts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProducts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLicenseManagerProductLicenseConsumersItemsMissingProducts {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLicenseManagerProductLicenseConsumersItemsList <a name="DataOciLicenseManagerProductLicenseConsumersItemsList" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLicenseManagerProductLicenseConsumersItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.get"></a>

```csharp
private DataOciLicenseManagerProductLicenseConsumersItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList <a name="DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.get"></a>

```csharp
private DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference <a name="DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.property.category">Category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProducts">DataOciLicenseManagerProductLicenseConsumersItemsMissingProducts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Category`<sup>Required</sup> <a name="Category" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.property.category"></a>

```csharp
public string Category { get; }
```

- *Type:* string

---

##### `Count`<sup>Required</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsOutputReference.property.internalValue"></a>

```csharp
public DataOciLicenseManagerProductLicenseConsumersItemsMissingProducts InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProducts">DataOciLicenseManagerProductLicenseConsumersItemsMissingProducts</a>

---


### DataOciLicenseManagerProductLicenseConsumersItemsOutputReference <a name="DataOciLicenseManagerProductLicenseConsumersItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLicenseManagerProductLicenseConsumersItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.areAllOptionsAvailable">AreAllOptionsAvailable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.isBaseLicenseAvailable">IsBaseLicenseAvailable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.licenseUnitsConsumed">LicenseUnitsConsumed</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.licenseUnitType">LicenseUnitType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.missingProducts">MissingProducts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList">DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.productName">ProductName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.resourceCompartmentId">ResourceCompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.resourceCompartmentName">ResourceCompartmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.resourceId">ResourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.resourceName">ResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.resourceUnitCount">ResourceUnitCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.resourceUnitType">ResourceUnitType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItems">DataOciLicenseManagerProductLicenseConsumersItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AreAllOptionsAvailable`<sup>Required</sup> <a name="AreAllOptionsAvailable" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.areAllOptionsAvailable"></a>

```csharp
public IResolvable AreAllOptionsAvailable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsBaseLicenseAvailable`<sup>Required</sup> <a name="IsBaseLicenseAvailable" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.isBaseLicenseAvailable"></a>

```csharp
public IResolvable IsBaseLicenseAvailable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LicenseUnitsConsumed`<sup>Required</sup> <a name="LicenseUnitsConsumed" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.licenseUnitsConsumed"></a>

```csharp
public double LicenseUnitsConsumed { get; }
```

- *Type:* double

---

##### `LicenseUnitType`<sup>Required</sup> <a name="LicenseUnitType" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.licenseUnitType"></a>

```csharp
public string LicenseUnitType { get; }
```

- *Type:* string

---

##### `MissingProducts`<sup>Required</sup> <a name="MissingProducts" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.missingProducts"></a>

```csharp
public DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList MissingProducts { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList">DataOciLicenseManagerProductLicenseConsumersItemsMissingProductsList</a>

---

##### `ProductName`<sup>Required</sup> <a name="ProductName" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.productName"></a>

```csharp
public string ProductName { get; }
```

- *Type:* string

---

##### `ResourceCompartmentId`<sup>Required</sup> <a name="ResourceCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.resourceCompartmentId"></a>

```csharp
public string ResourceCompartmentId { get; }
```

- *Type:* string

---

##### `ResourceCompartmentName`<sup>Required</sup> <a name="ResourceCompartmentName" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.resourceCompartmentName"></a>

```csharp
public string ResourceCompartmentName { get; }
```

- *Type:* string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.resourceId"></a>

```csharp
public string ResourceId { get; }
```

- *Type:* string

---

##### `ResourceName`<sup>Required</sup> <a name="ResourceName" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.resourceName"></a>

```csharp
public string ResourceName { get; }
```

- *Type:* string

---

##### `ResourceUnitCount`<sup>Required</sup> <a name="ResourceUnitCount" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.resourceUnitCount"></a>

```csharp
public double ResourceUnitCount { get; }
```

- *Type:* double

---

##### `ResourceUnitType`<sup>Required</sup> <a name="ResourceUnitType" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.resourceUnitType"></a>

```csharp
public string ResourceUnitType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciLicenseManagerProductLicenseConsumersItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerProductLicenseConsumers.DataOciLicenseManagerProductLicenseConsumersItems">DataOciLicenseManagerProductLicenseConsumersItems</a>

---



