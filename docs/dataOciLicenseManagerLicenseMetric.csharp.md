# `dataOciLicenseManagerLicenseMetric` Submodule <a name="`dataOciLicenseManagerLicenseMetric` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLicenseManagerLicenseMetric <a name="DataOciLicenseManagerLicenseMetric" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_license_metric oci_license_manager_license_metric}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLicenseManagerLicenseMetric(Construct Scope, string Id, DataOciLicenseManagerLicenseMetricConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig">DataOciLicenseManagerLicenseMetricConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig">DataOciLicenseManagerLicenseMetricConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.resetIsCompartmentIdInSubtree">ResetIsCompartmentIdInSubtree</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsCompartmentIdInSubtree` <a name="ResetIsCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.resetIsCompartmentIdInSubtree"></a>

```csharp
private void ResetIsCompartmentIdInSubtree()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLicenseManagerLicenseMetric resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLicenseManagerLicenseMetric.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLicenseManagerLicenseMetric.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLicenseManagerLicenseMetric.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLicenseManagerLicenseMetric.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciLicenseManagerLicenseMetric resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciLicenseManagerLicenseMetric to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciLicenseManagerLicenseMetric that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_license_metric#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLicenseManagerLicenseMetric to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.licenseRecordExpiringSoonCount">LicenseRecordExpiringSoonCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.totalByolInstanceCount">TotalByolInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.totalLicenseIncludedInstanceCount">TotalLicenseIncludedInstanceCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.totalProductLicenseCount">TotalProductLicenseCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.isCompartmentIdInSubtreeInput">IsCompartmentIdInSubtreeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.isCompartmentIdInSubtree">IsCompartmentIdInSubtree</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `LicenseRecordExpiringSoonCount`<sup>Required</sup> <a name="LicenseRecordExpiringSoonCount" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.licenseRecordExpiringSoonCount"></a>

```csharp
public double LicenseRecordExpiringSoonCount { get; }
```

- *Type:* double

---

##### `TotalByolInstanceCount`<sup>Required</sup> <a name="TotalByolInstanceCount" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.totalByolInstanceCount"></a>

```csharp
public double TotalByolInstanceCount { get; }
```

- *Type:* double

---

##### `TotalLicenseIncludedInstanceCount`<sup>Required</sup> <a name="TotalLicenseIncludedInstanceCount" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.totalLicenseIncludedInstanceCount"></a>

```csharp
public double TotalLicenseIncludedInstanceCount { get; }
```

- *Type:* double

---

##### `TotalProductLicenseCount`<sup>Required</sup> <a name="TotalProductLicenseCount" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.totalProductLicenseCount"></a>

```csharp
public double TotalProductLicenseCount { get; }
```

- *Type:* double

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsCompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="IsCompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.isCompartmentIdInSubtreeInput"></a>

```csharp
public object IsCompartmentIdInSubtreeInput { get; }
```

- *Type:* object

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsCompartmentIdInSubtree`<sup>Required</sup> <a name="IsCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.isCompartmentIdInSubtree"></a>

```csharp
public object IsCompartmentIdInSubtree { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetric.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLicenseManagerLicenseMetricConfig <a name="DataOciLicenseManagerLicenseMetricConfig" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLicenseManagerLicenseMetricConfig {
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_license_metric#compartment_id DataOciLicenseManagerLicenseMetric#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_license_metric#id DataOciLicenseManagerLicenseMetric#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.isCompartmentIdInSubtree">IsCompartmentIdInSubtree</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_license_metric#is_compartment_id_in_subtree DataOciLicenseManagerLicenseMetric#is_compartment_id_in_subtree}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_license_metric#compartment_id DataOciLicenseManagerLicenseMetric#compartment_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_license_metric#id DataOciLicenseManagerLicenseMetric#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsCompartmentIdInSubtree`<sup>Optional</sup> <a name="IsCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciLicenseManagerLicenseMetric.DataOciLicenseManagerLicenseMetricConfig.property.isCompartmentIdInSubtree"></a>

```csharp
public object IsCompartmentIdInSubtree { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/license_manager_license_metric#is_compartment_id_in_subtree DataOciLicenseManagerLicenseMetric#is_compartment_id_in_subtree}.

---



