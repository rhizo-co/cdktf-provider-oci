# `dataOciComputeCloudAtCustomerCccInfrastructure` Submodule <a name="`dataOciComputeCloudAtCustomerCccInfrastructure` Submodule" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciComputeCloudAtCustomerCccInfrastructure <a name="DataOciComputeCloudAtCustomerCccInfrastructure" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructure oci_compute_cloud_at_customer_ccc_infrastructure}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructure(Construct Scope, string Id, DataOciComputeCloudAtCustomerCccInfrastructureConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig">DataOciComputeCloudAtCustomerCccInfrastructureConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig">DataOciComputeCloudAtCustomerCccInfrastructureConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciComputeCloudAtCustomerCccInfrastructure resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciComputeCloudAtCustomerCccInfrastructure.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciComputeCloudAtCustomerCccInfrastructure.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciComputeCloudAtCustomerCccInfrastructure.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciComputeCloudAtCustomerCccInfrastructure.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciComputeCloudAtCustomerCccInfrastructure resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciComputeCloudAtCustomerCccInfrastructure to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciComputeCloudAtCustomerCccInfrastructure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructure#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciComputeCloudAtCustomerCccInfrastructure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.cccUpgradeScheduleId">CccUpgradeScheduleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.connectionDetails">ConnectionDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.connectionState">ConnectionState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.infrastructureInventory">InfrastructureInventory</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.infrastructureNetworkConfiguration">InfrastructureNetworkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.provisioningFingerprint">ProvisioningFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.provisioningPin">ProvisioningPin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.shortName">ShortName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.upgradeInformation">UpgradeInformation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList">DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.cccInfrastructureIdInput">CccInfrastructureIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.cccInfrastructureId">CccInfrastructureId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CccUpgradeScheduleId`<sup>Required</sup> <a name="CccUpgradeScheduleId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.cccUpgradeScheduleId"></a>

```csharp
public string CccUpgradeScheduleId { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ConnectionDetails`<sup>Required</sup> <a name="ConnectionDetails" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.connectionDetails"></a>

```csharp
public string ConnectionDetails { get; }
```

- *Type:* string

---

##### `ConnectionState`<sup>Required</sup> <a name="ConnectionState" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.connectionState"></a>

```csharp
public string ConnectionState { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InfrastructureInventory`<sup>Required</sup> <a name="InfrastructureInventory" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.infrastructureInventory"></a>

```csharp
public DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList InfrastructureInventory { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList</a>

---

##### `InfrastructureNetworkConfiguration`<sup>Required</sup> <a name="InfrastructureNetworkConfiguration" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.infrastructureNetworkConfiguration"></a>

```csharp
public DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList InfrastructureNetworkConfiguration { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `ProvisioningFingerprint`<sup>Required</sup> <a name="ProvisioningFingerprint" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.provisioningFingerprint"></a>

```csharp
public string ProvisioningFingerprint { get; }
```

- *Type:* string

---

##### `ProvisioningPin`<sup>Required</sup> <a name="ProvisioningPin" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.provisioningPin"></a>

```csharp
public string ProvisioningPin { get; }
```

- *Type:* string

---

##### `ShortName`<sup>Required</sup> <a name="ShortName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.shortName"></a>

```csharp
public string ShortName { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `UpgradeInformation`<sup>Required</sup> <a name="UpgradeInformation" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.upgradeInformation"></a>

```csharp
public DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList UpgradeInformation { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList">DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList</a>

---

##### `CccInfrastructureIdInput`<sup>Optional</sup> <a name="CccInfrastructureIdInput" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.cccInfrastructureIdInput"></a>

```csharp
public string CccInfrastructureIdInput { get; }
```

- *Type:* string

---

##### `CccInfrastructureId`<sup>Required</sup> <a name="CccInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.cccInfrastructureId"></a>

```csharp
public string CccInfrastructureId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructure.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciComputeCloudAtCustomerCccInfrastructureConfig <a name="DataOciComputeCloudAtCustomerCccInfrastructureConfig" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructureConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CccInfrastructureId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.cccInfrastructureId">CccInfrastructureId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructure#ccc_infrastructure_id DataOciComputeCloudAtCustomerCccInfrastructure#ccc_infrastructure_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CccInfrastructureId`<sup>Required</sup> <a name="CccInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureConfig.property.cccInfrastructureId"></a>

```csharp
public string CccInfrastructureId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/compute_cloud_at_customer_ccc_infrastructure#ccc_infrastructure_id DataOciComputeCloudAtCustomerCccInfrastructure#ccc_infrastructure_id}.

---

### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventory <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventory" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventory"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventory.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventory {

};
```


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfiguration <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfiguration" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfiguration {

};
```


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamic <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamic" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamic"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamic.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamic {

};
```


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation {

};
```


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStatic <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStatic" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStatic"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStatic.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStatic {

};
```


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodes <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodes" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodes {

};
```


### DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformation <a name="DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformation" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformation {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.get"></a>

```csharp
private DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.capacityStorageTrayCount">CapacityStorageTrayCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.computeNodeCount">ComputeNodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.managementNodeCount">ManagementNodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.performanceStorageTrayCount">PerformanceStorageTrayCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.serialNumber">SerialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventory">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CapacityStorageTrayCount`<sup>Required</sup> <a name="CapacityStorageTrayCount" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.capacityStorageTrayCount"></a>

```csharp
public double CapacityStorageTrayCount { get; }
```

- *Type:* double

---

##### `ComputeNodeCount`<sup>Required</sup> <a name="ComputeNodeCount" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.computeNodeCount"></a>

```csharp
public double ComputeNodeCount { get; }
```

- *Type:* double

---

##### `ManagementNodeCount`<sup>Required</sup> <a name="ManagementNodeCount" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.managementNodeCount"></a>

```csharp
public double ManagementNodeCount { get; }
```

- *Type:* double

---

##### `PerformanceStorageTrayCount`<sup>Required</sup> <a name="PerformanceStorageTrayCount" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.performanceStorageTrayCount"></a>

```csharp
public double PerformanceStorageTrayCount { get; }
```

- *Type:* double

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.serialNumber"></a>

```csharp
public string SerialNumber { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventoryOutputReference.property.internalValue"></a>

```csharp
public DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventory InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventory">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureInventory</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.get"></a>

```csharp
private DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.bgpTopology">BgpTopology</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.oracleAsn">OracleAsn</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.peerInformation">PeerInformation</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamic">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BgpTopology`<sup>Required</sup> <a name="BgpTopology" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.bgpTopology"></a>

```csharp
public string BgpTopology { get; }
```

- *Type:* string

---

##### `OracleAsn`<sup>Required</sup> <a name="OracleAsn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.oracleAsn"></a>

```csharp
public double OracleAsn { get; }
```

- *Type:* double

---

##### `PeerInformation`<sup>Required</sup> <a name="PeerInformation" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.peerInformation"></a>

```csharp
public DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList PeerInformation { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicOutputReference.property.internalValue"></a>

```csharp
public DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamic InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamic">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamic</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.get"></a>

```csharp
private DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.asn">Asn</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.ip">Ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Asn`<sup>Required</sup> <a name="Asn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.asn"></a>

```csharp
public double Asn { get; }
```

- *Type:* double

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.ip"></a>

```csharp
public string Ip { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformationOutputReference.property.internalValue"></a>

```csharp
public DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicPeerInformation</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.get"></a>

```csharp
private DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.uplinkHsrpGroup">UplinkHsrpGroup</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.uplinkVlan">UplinkVlan</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStatic">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStatic</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UplinkHsrpGroup`<sup>Required</sup> <a name="UplinkHsrpGroup" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.uplinkHsrpGroup"></a>

```csharp
public double UplinkHsrpGroup { get; }
```

- *Type:* double

---

##### `UplinkVlan`<sup>Required</sup> <a name="UplinkVlan" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.uplinkVlan"></a>

```csharp
public double UplinkVlan { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticOutputReference.property.internalValue"></a>

```csharp
public DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStatic InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStatic">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStatic</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.get"></a>

```csharp
private DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.get"></a>

```csharp
private DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.property.ip">Ip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodes">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.property.ip"></a>

```csharp
public string Ip { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesOutputReference.property.internalValue"></a>

```csharp
public DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodes InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodes">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodes</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.dnsIps">DnsIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.infrastructureRoutingDynamic">InfrastructureRoutingDynamic</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.infrastructureRoutingStatic">InfrastructureRoutingStatic</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.managementNodes">ManagementNodes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.mgmtVipHostname">MgmtVipHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.mgmtVipIp">MgmtVipIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.spineIps">SpineIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.spineVip">SpineVip</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkDomain">UplinkDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkGatewayIp">UplinkGatewayIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkNetmask">UplinkNetmask</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkPortCount">UplinkPortCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkPortForwardErrorCorrection">UplinkPortForwardErrorCorrection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkPortSpeedInGbps">UplinkPortSpeedInGbps</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkVlanMtu">UplinkVlanMtu</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfiguration">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DnsIps`<sup>Required</sup> <a name="DnsIps" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.dnsIps"></a>

```csharp
public string[] DnsIps { get; }
```

- *Type:* string[]

---

##### `InfrastructureRoutingDynamic`<sup>Required</sup> <a name="InfrastructureRoutingDynamic" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.infrastructureRoutingDynamic"></a>

```csharp
public DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList InfrastructureRoutingDynamic { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingDynamicList</a>

---

##### `InfrastructureRoutingStatic`<sup>Required</sup> <a name="InfrastructureRoutingStatic" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.infrastructureRoutingStatic"></a>

```csharp
public DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList InfrastructureRoutingStatic { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationInfrastructureRoutingStaticList</a>

---

##### `ManagementNodes`<sup>Required</sup> <a name="ManagementNodes" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.managementNodes"></a>

```csharp
public DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList ManagementNodes { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationManagementNodesList</a>

---

##### `MgmtVipHostname`<sup>Required</sup> <a name="MgmtVipHostname" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.mgmtVipHostname"></a>

```csharp
public string MgmtVipHostname { get; }
```

- *Type:* string

---

##### `MgmtVipIp`<sup>Required</sup> <a name="MgmtVipIp" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.mgmtVipIp"></a>

```csharp
public string MgmtVipIp { get; }
```

- *Type:* string

---

##### `SpineIps`<sup>Required</sup> <a name="SpineIps" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.spineIps"></a>

```csharp
public string[] SpineIps { get; }
```

- *Type:* string[]

---

##### `SpineVip`<sup>Required</sup> <a name="SpineVip" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.spineVip"></a>

```csharp
public string SpineVip { get; }
```

- *Type:* string

---

##### `UplinkDomain`<sup>Required</sup> <a name="UplinkDomain" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkDomain"></a>

```csharp
public string UplinkDomain { get; }
```

- *Type:* string

---

##### `UplinkGatewayIp`<sup>Required</sup> <a name="UplinkGatewayIp" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkGatewayIp"></a>

```csharp
public string UplinkGatewayIp { get; }
```

- *Type:* string

---

##### `UplinkNetmask`<sup>Required</sup> <a name="UplinkNetmask" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkNetmask"></a>

```csharp
public string UplinkNetmask { get; }
```

- *Type:* string

---

##### `UplinkPortCount`<sup>Required</sup> <a name="UplinkPortCount" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkPortCount"></a>

```csharp
public double UplinkPortCount { get; }
```

- *Type:* double

---

##### `UplinkPortForwardErrorCorrection`<sup>Required</sup> <a name="UplinkPortForwardErrorCorrection" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkPortForwardErrorCorrection"></a>

```csharp
public string UplinkPortForwardErrorCorrection { get; }
```

- *Type:* string

---

##### `UplinkPortSpeedInGbps`<sup>Required</sup> <a name="UplinkPortSpeedInGbps" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkPortSpeedInGbps"></a>

```csharp
public double UplinkPortSpeedInGbps { get; }
```

- *Type:* double

---

##### `UplinkVlanMtu`<sup>Required</sup> <a name="UplinkVlanMtu" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.uplinkVlanMtu"></a>

```csharp
public double UplinkVlanMtu { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfiguration InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfiguration">DataOciComputeCloudAtCustomerCccInfrastructureInfrastructureNetworkConfiguration</a>

---


### DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList <a name="DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.get"></a>

```csharp
private DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference <a name="DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.currentVersion">CurrentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.isActive">IsActive</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.scheduledUpgradeDuration">ScheduledUpgradeDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.timeOfScheduledUpgrade">TimeOfScheduledUpgrade</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformation">DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CurrentVersion`<sup>Required</sup> <a name="CurrentVersion" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.currentVersion"></a>

```csharp
public string CurrentVersion { get; }
```

- *Type:* string

---

##### `IsActive`<sup>Required</sup> <a name="IsActive" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.isActive"></a>

```csharp
public IResolvable IsActive { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ScheduledUpgradeDuration`<sup>Required</sup> <a name="ScheduledUpgradeDuration" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.scheduledUpgradeDuration"></a>

```csharp
public string ScheduledUpgradeDuration { get; }
```

- *Type:* string

---

##### `TimeOfScheduledUpgrade`<sup>Required</sup> <a name="TimeOfScheduledUpgrade" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.timeOfScheduledUpgrade"></a>

```csharp
public string TimeOfScheduledUpgrade { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformationOutputReference.property.internalValue"></a>

```csharp
public DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformation InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeCloudAtCustomerCccInfrastructure.DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformation">DataOciComputeCloudAtCustomerCccInfrastructureUpgradeInformation</a>

---



