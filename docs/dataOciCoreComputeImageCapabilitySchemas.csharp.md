# `dataOciCoreComputeImageCapabilitySchemas` Submodule <a name="`dataOciCoreComputeImageCapabilitySchemas` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreComputeImageCapabilitySchemas <a name="DataOciCoreComputeImageCapabilitySchemas" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schemas oci_core_compute_image_capability_schemas}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreComputeImageCapabilitySchemas(Construct Scope, string Id, DataOciCoreComputeImageCapabilitySchemasConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig">DataOciCoreComputeImageCapabilitySchemasConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig">DataOciCoreComputeImageCapabilitySchemasConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.resetImageId">ResetImageId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.resetCompartmentId"></a>

```csharp
private void ResetCompartmentId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImageId` <a name="ResetImageId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.resetImageId"></a>

```csharp
private void ResetImageId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreComputeImageCapabilitySchemas resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreComputeImageCapabilitySchemas.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreComputeImageCapabilitySchemas.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreComputeImageCapabilitySchemas.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreComputeImageCapabilitySchemas.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciCoreComputeImageCapabilitySchemas resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreComputeImageCapabilitySchemas to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreComputeImageCapabilitySchemas that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schemas#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreComputeImageCapabilitySchemas to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.computeImageCapabilitySchemas">ComputeImageCapabilitySchemas</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList">DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList">DataOciCoreComputeImageCapabilitySchemasFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.imageIdInput">ImageIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.imageId">ImageId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ComputeImageCapabilitySchemas`<sup>Required</sup> <a name="ComputeImageCapabilitySchemas" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.computeImageCapabilitySchemas"></a>

```csharp
public DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList ComputeImageCapabilitySchemas { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList">DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.filter"></a>

```csharp
public DataOciCoreComputeImageCapabilitySchemasFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList">DataOciCoreComputeImageCapabilitySchemasFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImageIdInput`<sup>Optional</sup> <a name="ImageIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.imageIdInput"></a>

```csharp
public string ImageIdInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.imageId"></a>

```csharp
public string ImageId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemas.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemas <a name="DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemas" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemas"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemas.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemas {

};
```


### DataOciCoreComputeImageCapabilitySchemasConfig <a name="DataOciCoreComputeImageCapabilitySchemasConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreComputeImageCapabilitySchemasConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId = null,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    string ImageId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schemas#compartment_id DataOciCoreComputeImageCapabilitySchemas#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schemas#display_name DataOciCoreComputeImageCapabilitySchemas#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schemas#id DataOciCoreComputeImageCapabilitySchemas#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig.property.imageId">ImageId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schemas#image_id DataOciCoreComputeImageCapabilitySchemas#image_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schemas#compartment_id DataOciCoreComputeImageCapabilitySchemas#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schemas#display_name DataOciCoreComputeImageCapabilitySchemas#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schemas#filter DataOciCoreComputeImageCapabilitySchemas#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schemas#id DataOciCoreComputeImageCapabilitySchemas#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImageId`<sup>Optional</sup> <a name="ImageId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasConfig.property.imageId"></a>

```csharp
public string ImageId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schemas#image_id DataOciCoreComputeImageCapabilitySchemas#image_id}.

---

### DataOciCoreComputeImageCapabilitySchemasFilter <a name="DataOciCoreComputeImageCapabilitySchemasFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreComputeImageCapabilitySchemasFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schemas#name DataOciCoreComputeImageCapabilitySchemas#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schemas#values DataOciCoreComputeImageCapabilitySchemas#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schemas#regex DataOciCoreComputeImageCapabilitySchemas#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schemas#name DataOciCoreComputeImageCapabilitySchemas#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schemas#values DataOciCoreComputeImageCapabilitySchemas#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_compute_image_capability_schemas#regex DataOciCoreComputeImageCapabilitySchemas#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList <a name="DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList.get"></a>

```csharp
private DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference <a name="DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.computeGlobalImageCapabilitySchemaId">ComputeGlobalImageCapabilitySchemaId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.computeGlobalImageCapabilitySchemaVersionName">ComputeGlobalImageCapabilitySchemaVersionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.imageId">ImageId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.schemaData">SchemaData</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemas">DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemas</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ComputeGlobalImageCapabilitySchemaId`<sup>Required</sup> <a name="ComputeGlobalImageCapabilitySchemaId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.computeGlobalImageCapabilitySchemaId"></a>

```csharp
public string ComputeGlobalImageCapabilitySchemaId { get; }
```

- *Type:* string

---

##### `ComputeGlobalImageCapabilitySchemaVersionName`<sup>Required</sup> <a name="ComputeGlobalImageCapabilitySchemaVersionName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.computeGlobalImageCapabilitySchemaVersionName"></a>

```csharp
public string ComputeGlobalImageCapabilitySchemaVersionName { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.imageId"></a>

```csharp
public string ImageId { get; }
```

- *Type:* string

---

##### `SchemaData`<sup>Required</sup> <a name="SchemaData" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.schemaData"></a>

```csharp
public StringMap SchemaData { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemasOutputReference.property.internalValue"></a>

```csharp
public DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemas InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemas">DataOciCoreComputeImageCapabilitySchemasComputeImageCapabilitySchemas</a>

---


### DataOciCoreComputeImageCapabilitySchemasFilterList <a name="DataOciCoreComputeImageCapabilitySchemasFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreComputeImageCapabilitySchemasFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.get"></a>

```csharp
private DataOciCoreComputeImageCapabilitySchemasFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciCoreComputeImageCapabilitySchemasFilterOutputReference <a name="DataOciCoreComputeImageCapabilitySchemasFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreComputeImageCapabilitySchemasFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreComputeImageCapabilitySchemas.DataOciCoreComputeImageCapabilitySchemasFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



