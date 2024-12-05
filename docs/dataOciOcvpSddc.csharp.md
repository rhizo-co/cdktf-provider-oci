# `dataOciOcvpSddc` Submodule <a name="`dataOciOcvpSddc` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOcvpSddc <a name="DataOciOcvpSddc" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddc oci_ocvp_sddc}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddc(Construct Scope, string Id, DataOciOcvpSddcConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcConfig">DataOciOcvpSddcConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcConfig">DataOciOcvpSddcConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOcvpSddc resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOcvpSddc.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOcvpSddc.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOcvpSddc.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOcvpSddc.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciOcvpSddc resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOcvpSddc to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOcvpSddc that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddc#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOcvpSddc to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.actualEsxiHostsCount">ActualEsxiHostsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.capacityReservationId">CapacityReservationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.clustersCount">ClustersCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.computeAvailabilityDomain">ComputeAvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.datastores">Datastores</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresList">DataOciOcvpSddcDatastoresList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.esxiHostsCount">EsxiHostsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.esxiSoftwareVersion">EsxiSoftwareVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.hcxAction">HcxAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.hcxFqdn">HcxFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.hcxInitialPassword">HcxInitialPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.hcxMode">HcxMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.hcxOnPremKey">HcxOnPremKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.hcxOnPremLicenses">HcxOnPremLicenses</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesList">DataOciOcvpSddcHcxOnPremLicensesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.hcxPrivateIpId">HcxPrivateIpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.hcxVlanId">HcxVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.initialConfiguration">InitialConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationList">DataOciOcvpSddcInitialConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.initialHostOcpuCount">InitialHostOcpuCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.initialHostShapeName">InitialHostShapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.initialSku">InitialSku</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.instanceDisplayNamePrefix">InstanceDisplayNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.isHcxEnabled">IsHcxEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.isHcxEnterpriseEnabled">IsHcxEnterpriseEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.isHcxPendingDowngrade">IsHcxPendingDowngrade</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.isShieldedInstanceEnabled">IsShieldedInstanceEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.isSingleHostSddc">IsSingleHostSddc</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.nsxEdgeUplink1VlanId">NsxEdgeUplink1VlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.nsxEdgeUplink2VlanId">NsxEdgeUplink2VlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.nsxEdgeUplinkIpId">NsxEdgeUplinkIpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.nsxEdgeVtepVlanId">NsxEdgeVtepVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.nsxManagerFqdn">NsxManagerFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.nsxManagerInitialPassword">NsxManagerInitialPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.nsxManagerPrivateIpId">NsxManagerPrivateIpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.nsxManagerUsername">NsxManagerUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.nsxOverlaySegmentName">NsxOverlaySegmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.nsxVtepVlanId">NsxVtepVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.provisioningSubnetId">ProvisioningSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.provisioningVlanId">ProvisioningVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.refreshHcxLicenseStatus">RefreshHcxLicenseStatus</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.replicationVlanId">ReplicationVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.reservingHcxOnPremiseLicenseKeys">ReservingHcxOnPremiseLicenseKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.sshAuthorizedKeys">SshAuthorizedKeys</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.timeHcxBillingCycleEnd">TimeHcxBillingCycleEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.timeHcxLicenseStatusUpdated">TimeHcxLicenseStatusUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.upgradeLicenses">UpgradeLicenses</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesList">DataOciOcvpSddcUpgradeLicensesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.vcenterFqdn">VcenterFqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.vcenterInitialPassword">VcenterInitialPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.vcenterPrivateIpId">VcenterPrivateIpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.vcenterUsername">VcenterUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.vmotionVlanId">VmotionVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.vmwareSoftwareVersion">VmwareSoftwareVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.vsanVlanId">VsanVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.vsphereUpgradeGuide">VsphereUpgradeGuide</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.vsphereUpgradeObjects">VsphereUpgradeObjects</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsList">DataOciOcvpSddcVsphereUpgradeObjectsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.vsphereVlanId">VsphereVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.workloadNetworkCidr">WorkloadNetworkCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.sddcIdInput">SddcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.sddcId">SddcId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ActualEsxiHostsCount`<sup>Required</sup> <a name="ActualEsxiHostsCount" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.actualEsxiHostsCount"></a>

```csharp
public double ActualEsxiHostsCount { get; }
```

- *Type:* double

---

##### `CapacityReservationId`<sup>Required</sup> <a name="CapacityReservationId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.capacityReservationId"></a>

```csharp
public string CapacityReservationId { get; }
```

- *Type:* string

---

##### `ClustersCount`<sup>Required</sup> <a name="ClustersCount" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.clustersCount"></a>

```csharp
public double ClustersCount { get; }
```

- *Type:* double

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ComputeAvailabilityDomain`<sup>Required</sup> <a name="ComputeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.computeAvailabilityDomain"></a>

```csharp
public string ComputeAvailabilityDomain { get; }
```

- *Type:* string

---

##### `Datastores`<sup>Required</sup> <a name="Datastores" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.datastores"></a>

```csharp
public DataOciOcvpSddcDatastoresList Datastores { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresList">DataOciOcvpSddcDatastoresList</a>

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EsxiHostsCount`<sup>Required</sup> <a name="EsxiHostsCount" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.esxiHostsCount"></a>

```csharp
public double EsxiHostsCount { get; }
```

- *Type:* double

---

##### `EsxiSoftwareVersion`<sup>Required</sup> <a name="EsxiSoftwareVersion" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.esxiSoftwareVersion"></a>

```csharp
public string EsxiSoftwareVersion { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `HcxAction`<sup>Required</sup> <a name="HcxAction" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.hcxAction"></a>

```csharp
public string HcxAction { get; }
```

- *Type:* string

---

##### `HcxFqdn`<sup>Required</sup> <a name="HcxFqdn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.hcxFqdn"></a>

```csharp
public string HcxFqdn { get; }
```

- *Type:* string

---

##### `HcxInitialPassword`<sup>Required</sup> <a name="HcxInitialPassword" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.hcxInitialPassword"></a>

```csharp
public string HcxInitialPassword { get; }
```

- *Type:* string

---

##### `HcxMode`<sup>Required</sup> <a name="HcxMode" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.hcxMode"></a>

```csharp
public string HcxMode { get; }
```

- *Type:* string

---

##### `HcxOnPremKey`<sup>Required</sup> <a name="HcxOnPremKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.hcxOnPremKey"></a>

```csharp
public string HcxOnPremKey { get; }
```

- *Type:* string

---

##### `HcxOnPremLicenses`<sup>Required</sup> <a name="HcxOnPremLicenses" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.hcxOnPremLicenses"></a>

```csharp
public DataOciOcvpSddcHcxOnPremLicensesList HcxOnPremLicenses { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesList">DataOciOcvpSddcHcxOnPremLicensesList</a>

---

##### `HcxPrivateIpId`<sup>Required</sup> <a name="HcxPrivateIpId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.hcxPrivateIpId"></a>

```csharp
public string HcxPrivateIpId { get; }
```

- *Type:* string

---

##### `HcxVlanId`<sup>Required</sup> <a name="HcxVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.hcxVlanId"></a>

```csharp
public string HcxVlanId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InitialConfiguration`<sup>Required</sup> <a name="InitialConfiguration" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.initialConfiguration"></a>

```csharp
public DataOciOcvpSddcInitialConfigurationList InitialConfiguration { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationList">DataOciOcvpSddcInitialConfigurationList</a>

---

##### `InitialHostOcpuCount`<sup>Required</sup> <a name="InitialHostOcpuCount" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.initialHostOcpuCount"></a>

```csharp
public double InitialHostOcpuCount { get; }
```

- *Type:* double

---

##### `InitialHostShapeName`<sup>Required</sup> <a name="InitialHostShapeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.initialHostShapeName"></a>

```csharp
public string InitialHostShapeName { get; }
```

- *Type:* string

---

##### `InitialSku`<sup>Required</sup> <a name="InitialSku" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.initialSku"></a>

```csharp
public string InitialSku { get; }
```

- *Type:* string

---

##### `InstanceDisplayNamePrefix`<sup>Required</sup> <a name="InstanceDisplayNamePrefix" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.instanceDisplayNamePrefix"></a>

```csharp
public string InstanceDisplayNamePrefix { get; }
```

- *Type:* string

---

##### `IsHcxEnabled`<sup>Required</sup> <a name="IsHcxEnabled" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.isHcxEnabled"></a>

```csharp
public IResolvable IsHcxEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsHcxEnterpriseEnabled`<sup>Required</sup> <a name="IsHcxEnterpriseEnabled" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.isHcxEnterpriseEnabled"></a>

```csharp
public IResolvable IsHcxEnterpriseEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsHcxPendingDowngrade`<sup>Required</sup> <a name="IsHcxPendingDowngrade" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.isHcxPendingDowngrade"></a>

```csharp
public IResolvable IsHcxPendingDowngrade { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsShieldedInstanceEnabled`<sup>Required</sup> <a name="IsShieldedInstanceEnabled" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.isShieldedInstanceEnabled"></a>

```csharp
public IResolvable IsShieldedInstanceEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsSingleHostSddc`<sup>Required</sup> <a name="IsSingleHostSddc" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.isSingleHostSddc"></a>

```csharp
public IResolvable IsSingleHostSddc { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `NsxEdgeUplink1VlanId`<sup>Required</sup> <a name="NsxEdgeUplink1VlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.nsxEdgeUplink1VlanId"></a>

```csharp
public string NsxEdgeUplink1VlanId { get; }
```

- *Type:* string

---

##### `NsxEdgeUplink2VlanId`<sup>Required</sup> <a name="NsxEdgeUplink2VlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.nsxEdgeUplink2VlanId"></a>

```csharp
public string NsxEdgeUplink2VlanId { get; }
```

- *Type:* string

---

##### `NsxEdgeUplinkIpId`<sup>Required</sup> <a name="NsxEdgeUplinkIpId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.nsxEdgeUplinkIpId"></a>

```csharp
public string NsxEdgeUplinkIpId { get; }
```

- *Type:* string

---

##### `NsxEdgeVtepVlanId`<sup>Required</sup> <a name="NsxEdgeVtepVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.nsxEdgeVtepVlanId"></a>

```csharp
public string NsxEdgeVtepVlanId { get; }
```

- *Type:* string

---

##### `NsxManagerFqdn`<sup>Required</sup> <a name="NsxManagerFqdn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.nsxManagerFqdn"></a>

```csharp
public string NsxManagerFqdn { get; }
```

- *Type:* string

---

##### `NsxManagerInitialPassword`<sup>Required</sup> <a name="NsxManagerInitialPassword" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.nsxManagerInitialPassword"></a>

```csharp
public string NsxManagerInitialPassword { get; }
```

- *Type:* string

---

##### `NsxManagerPrivateIpId`<sup>Required</sup> <a name="NsxManagerPrivateIpId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.nsxManagerPrivateIpId"></a>

```csharp
public string NsxManagerPrivateIpId { get; }
```

- *Type:* string

---

##### `NsxManagerUsername`<sup>Required</sup> <a name="NsxManagerUsername" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.nsxManagerUsername"></a>

```csharp
public string NsxManagerUsername { get; }
```

- *Type:* string

---

##### `NsxOverlaySegmentName`<sup>Required</sup> <a name="NsxOverlaySegmentName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.nsxOverlaySegmentName"></a>

```csharp
public string NsxOverlaySegmentName { get; }
```

- *Type:* string

---

##### `NsxVtepVlanId`<sup>Required</sup> <a name="NsxVtepVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.nsxVtepVlanId"></a>

```csharp
public string NsxVtepVlanId { get; }
```

- *Type:* string

---

##### `ProvisioningSubnetId`<sup>Required</sup> <a name="ProvisioningSubnetId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.provisioningSubnetId"></a>

```csharp
public string ProvisioningSubnetId { get; }
```

- *Type:* string

---

##### `ProvisioningVlanId`<sup>Required</sup> <a name="ProvisioningVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.provisioningVlanId"></a>

```csharp
public string ProvisioningVlanId { get; }
```

- *Type:* string

---

##### `RefreshHcxLicenseStatus`<sup>Required</sup> <a name="RefreshHcxLicenseStatus" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.refreshHcxLicenseStatus"></a>

```csharp
public IResolvable RefreshHcxLicenseStatus { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ReplicationVlanId`<sup>Required</sup> <a name="ReplicationVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.replicationVlanId"></a>

```csharp
public string ReplicationVlanId { get; }
```

- *Type:* string

---

##### `ReservingHcxOnPremiseLicenseKeys`<sup>Required</sup> <a name="ReservingHcxOnPremiseLicenseKeys" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.reservingHcxOnPremiseLicenseKeys"></a>

```csharp
public string[] ReservingHcxOnPremiseLicenseKeys { get; }
```

- *Type:* string[]

---

##### `SshAuthorizedKeys`<sup>Required</sup> <a name="SshAuthorizedKeys" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.sshAuthorizedKeys"></a>

```csharp
public string SshAuthorizedKeys { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeHcxBillingCycleEnd`<sup>Required</sup> <a name="TimeHcxBillingCycleEnd" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.timeHcxBillingCycleEnd"></a>

```csharp
public string TimeHcxBillingCycleEnd { get; }
```

- *Type:* string

---

##### `TimeHcxLicenseStatusUpdated`<sup>Required</sup> <a name="TimeHcxLicenseStatusUpdated" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.timeHcxLicenseStatusUpdated"></a>

```csharp
public string TimeHcxLicenseStatusUpdated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `UpgradeLicenses`<sup>Required</sup> <a name="UpgradeLicenses" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.upgradeLicenses"></a>

```csharp
public DataOciOcvpSddcUpgradeLicensesList UpgradeLicenses { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesList">DataOciOcvpSddcUpgradeLicensesList</a>

---

##### `VcenterFqdn`<sup>Required</sup> <a name="VcenterFqdn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.vcenterFqdn"></a>

```csharp
public string VcenterFqdn { get; }
```

- *Type:* string

---

##### `VcenterInitialPassword`<sup>Required</sup> <a name="VcenterInitialPassword" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.vcenterInitialPassword"></a>

```csharp
public string VcenterInitialPassword { get; }
```

- *Type:* string

---

##### `VcenterPrivateIpId`<sup>Required</sup> <a name="VcenterPrivateIpId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.vcenterPrivateIpId"></a>

```csharp
public string VcenterPrivateIpId { get; }
```

- *Type:* string

---

##### `VcenterUsername`<sup>Required</sup> <a name="VcenterUsername" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.vcenterUsername"></a>

```csharp
public string VcenterUsername { get; }
```

- *Type:* string

---

##### `VmotionVlanId`<sup>Required</sup> <a name="VmotionVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.vmotionVlanId"></a>

```csharp
public string VmotionVlanId { get; }
```

- *Type:* string

---

##### `VmwareSoftwareVersion`<sup>Required</sup> <a name="VmwareSoftwareVersion" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.vmwareSoftwareVersion"></a>

```csharp
public string VmwareSoftwareVersion { get; }
```

- *Type:* string

---

##### `VsanVlanId`<sup>Required</sup> <a name="VsanVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.vsanVlanId"></a>

```csharp
public string VsanVlanId { get; }
```

- *Type:* string

---

##### `VsphereUpgradeGuide`<sup>Required</sup> <a name="VsphereUpgradeGuide" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.vsphereUpgradeGuide"></a>

```csharp
public string VsphereUpgradeGuide { get; }
```

- *Type:* string

---

##### `VsphereUpgradeObjects`<sup>Required</sup> <a name="VsphereUpgradeObjects" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.vsphereUpgradeObjects"></a>

```csharp
public DataOciOcvpSddcVsphereUpgradeObjectsList VsphereUpgradeObjects { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsList">DataOciOcvpSddcVsphereUpgradeObjectsList</a>

---

##### `VsphereVlanId`<sup>Required</sup> <a name="VsphereVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.vsphereVlanId"></a>

```csharp
public string VsphereVlanId { get; }
```

- *Type:* string

---

##### `WorkloadNetworkCidr`<sup>Required</sup> <a name="WorkloadNetworkCidr" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.workloadNetworkCidr"></a>

```csharp
public string WorkloadNetworkCidr { get; }
```

- *Type:* string

---

##### `SddcIdInput`<sup>Optional</sup> <a name="SddcIdInput" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.sddcIdInput"></a>

```csharp
public string SddcIdInput { get; }
```

- *Type:* string

---

##### `SddcId`<sup>Required</sup> <a name="SddcId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.sddcId"></a>

```csharp
public string SddcId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddc.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOcvpSddcConfig <a name="DataOciOcvpSddcConfig" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string SddcId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcConfig.property.sddcId">SddcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddc#sddc_id DataOciOcvpSddc#sddc_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `SddcId`<sup>Required</sup> <a name="SddcId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcConfig.property.sddcId"></a>

```csharp
public string SddcId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/ocvp_sddc#sddc_id DataOciOcvpSddc#sddc_id}.

---

### DataOciOcvpSddcDatastores <a name="DataOciOcvpSddcDatastores" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastores"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastores.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcDatastores {

};
```


### DataOciOcvpSddcHcxOnPremLicenses <a name="DataOciOcvpSddcHcxOnPremLicenses" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicenses"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicenses.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcHcxOnPremLicenses {

};
```


### DataOciOcvpSddcInitialConfiguration <a name="DataOciOcvpSddcInitialConfiguration" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcInitialConfiguration {

};
```


### DataOciOcvpSddcInitialConfigurationInitialClusterConfigurations <a name="DataOciOcvpSddcInitialConfigurationInitialClusterConfigurations" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcInitialConfigurationInitialClusterConfigurations {

};
```


### DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores <a name="DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores {

};
```


### DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration <a name="DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration {

};
```


### DataOciOcvpSddcUpgradeLicenses <a name="DataOciOcvpSddcUpgradeLicenses" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicenses"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicenses.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcUpgradeLicenses {

};
```


### DataOciOcvpSddcVsphereUpgradeObjects <a name="DataOciOcvpSddcVsphereUpgradeObjects" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjects"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjects.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcVsphereUpgradeObjects {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOcvpSddcDatastoresList <a name="DataOciOcvpSddcDatastoresList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcDatastoresList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresList.get"></a>

```csharp
private DataOciOcvpSddcDatastoresOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOcvpSddcDatastoresOutputReference <a name="DataOciOcvpSddcDatastoresOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcDatastoresOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.property.blockVolumeIds">BlockVolumeIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.property.capacity">Capacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.property.datastoreType">DatastoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastores">DataOciOcvpSddcDatastores</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BlockVolumeIds`<sup>Required</sup> <a name="BlockVolumeIds" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.property.blockVolumeIds"></a>

```csharp
public string[] BlockVolumeIds { get; }
```

- *Type:* string[]

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.property.capacity"></a>

```csharp
public double Capacity { get; }
```

- *Type:* double

---

##### `DatastoreType`<sup>Required</sup> <a name="DatastoreType" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.property.datastoreType"></a>

```csharp
public string DatastoreType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastoresOutputReference.property.internalValue"></a>

```csharp
public DataOciOcvpSddcDatastores InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcDatastores">DataOciOcvpSddcDatastores</a>

---


### DataOciOcvpSddcHcxOnPremLicensesList <a name="DataOciOcvpSddcHcxOnPremLicensesList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcHcxOnPremLicensesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesList.get"></a>

```csharp
private DataOciOcvpSddcHcxOnPremLicensesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOcvpSddcHcxOnPremLicensesOutputReference <a name="DataOciOcvpSddcHcxOnPremLicensesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcHcxOnPremLicensesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.property.activationKey">ActivationKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.property.systemName">SystemName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicenses">DataOciOcvpSddcHcxOnPremLicenses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActivationKey`<sup>Required</sup> <a name="ActivationKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.property.activationKey"></a>

```csharp
public string ActivationKey { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SystemName`<sup>Required</sup> <a name="SystemName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.property.systemName"></a>

```csharp
public string SystemName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicensesOutputReference.property.internalValue"></a>

```csharp
public DataOciOcvpSddcHcxOnPremLicenses InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcHcxOnPremLicenses">DataOciOcvpSddcHcxOnPremLicenses</a>

---


### DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList <a name="DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.get"></a>

```csharp
private DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference <a name="DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.blockVolumeIds">BlockVolumeIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.datastoreType">DatastoreType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores">DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BlockVolumeIds`<sup>Required</sup> <a name="BlockVolumeIds" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.blockVolumeIds"></a>

```csharp
public string[] BlockVolumeIds { get; }
```

- *Type:* string[]

---

##### `DatastoreType`<sup>Required</sup> <a name="DatastoreType" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.datastoreType"></a>

```csharp
public string DatastoreType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.internalValue"></a>

```csharp
public DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores">DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores</a>

---


### DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsList <a name="DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsList.get"></a>

```csharp
private DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList <a name="DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.get"></a>

```csharp
private DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference <a name="DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.hcxVlanId">HcxVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink1VlanId">NsxEdgeUplink1VlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink2VlanId">NsxEdgeUplink2VlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeVtepVlanId">NsxEdgeVtepVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxVtepVlanId">NsxVtepVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningSubnetId">ProvisioningSubnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningVlanId">ProvisioningVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.replicationVlanId">ReplicationVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vmotionVlanId">VmotionVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsanVlanId">VsanVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsphereVlanId">VsphereVlanId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration">DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HcxVlanId`<sup>Required</sup> <a name="HcxVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.hcxVlanId"></a>

```csharp
public string HcxVlanId { get; }
```

- *Type:* string

---

##### `NsxEdgeUplink1VlanId`<sup>Required</sup> <a name="NsxEdgeUplink1VlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink1VlanId"></a>

```csharp
public string NsxEdgeUplink1VlanId { get; }
```

- *Type:* string

---

##### `NsxEdgeUplink2VlanId`<sup>Required</sup> <a name="NsxEdgeUplink2VlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink2VlanId"></a>

```csharp
public string NsxEdgeUplink2VlanId { get; }
```

- *Type:* string

---

##### `NsxEdgeVtepVlanId`<sup>Required</sup> <a name="NsxEdgeVtepVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeVtepVlanId"></a>

```csharp
public string NsxEdgeVtepVlanId { get; }
```

- *Type:* string

---

##### `NsxVtepVlanId`<sup>Required</sup> <a name="NsxVtepVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxVtepVlanId"></a>

```csharp
public string NsxVtepVlanId { get; }
```

- *Type:* string

---

##### `ProvisioningSubnetId`<sup>Required</sup> <a name="ProvisioningSubnetId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningSubnetId"></a>

```csharp
public string ProvisioningSubnetId { get; }
```

- *Type:* string

---

##### `ProvisioningVlanId`<sup>Required</sup> <a name="ProvisioningVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningVlanId"></a>

```csharp
public string ProvisioningVlanId { get; }
```

- *Type:* string

---

##### `ReplicationVlanId`<sup>Required</sup> <a name="ReplicationVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.replicationVlanId"></a>

```csharp
public string ReplicationVlanId { get; }
```

- *Type:* string

---

##### `VmotionVlanId`<sup>Required</sup> <a name="VmotionVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vmotionVlanId"></a>

```csharp
public string VmotionVlanId { get; }
```

- *Type:* string

---

##### `VsanVlanId`<sup>Required</sup> <a name="VsanVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsanVlanId"></a>

```csharp
public string VsanVlanId { get; }
```

- *Type:* string

---

##### `VsphereVlanId`<sup>Required</sup> <a name="VsphereVlanId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsphereVlanId"></a>

```csharp
public string VsphereVlanId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration">DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration</a>

---


### DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference <a name="DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.actualEsxiHostsCount">ActualEsxiHostsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.capacityReservationId">CapacityReservationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.computeAvailabilityDomain">ComputeAvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.datastores">Datastores</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList">DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.esxiHostsCount">EsxiHostsCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialCommitment">InitialCommitment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostOcpuCount">InitialHostOcpuCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostShapeName">InitialHostShapeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.instanceDisplayNamePrefix">InstanceDisplayNamePrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.isShieldedInstanceEnabled">IsShieldedInstanceEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList">DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.vsphereType">VsphereType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.workloadNetworkCidr">WorkloadNetworkCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurations">DataOciOcvpSddcInitialConfigurationInitialClusterConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActualEsxiHostsCount`<sup>Required</sup> <a name="ActualEsxiHostsCount" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.actualEsxiHostsCount"></a>

```csharp
public double ActualEsxiHostsCount { get; }
```

- *Type:* double

---

##### `CapacityReservationId`<sup>Required</sup> <a name="CapacityReservationId" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.capacityReservationId"></a>

```csharp
public string CapacityReservationId { get; }
```

- *Type:* string

---

##### `ComputeAvailabilityDomain`<sup>Required</sup> <a name="ComputeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.computeAvailabilityDomain"></a>

```csharp
public string ComputeAvailabilityDomain { get; }
```

- *Type:* string

---

##### `Datastores`<sup>Required</sup> <a name="Datastores" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.datastores"></a>

```csharp
public DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList Datastores { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList">DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EsxiHostsCount`<sup>Required</sup> <a name="EsxiHostsCount" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.esxiHostsCount"></a>

```csharp
public double EsxiHostsCount { get; }
```

- *Type:* double

---

##### `InitialCommitment`<sup>Required</sup> <a name="InitialCommitment" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialCommitment"></a>

```csharp
public string InitialCommitment { get; }
```

- *Type:* string

---

##### `InitialHostOcpuCount`<sup>Required</sup> <a name="InitialHostOcpuCount" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostOcpuCount"></a>

```csharp
public double InitialHostOcpuCount { get; }
```

- *Type:* double

---

##### `InitialHostShapeName`<sup>Required</sup> <a name="InitialHostShapeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostShapeName"></a>

```csharp
public string InitialHostShapeName { get; }
```

- *Type:* string

---

##### `InstanceDisplayNamePrefix`<sup>Required</sup> <a name="InstanceDisplayNamePrefix" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.instanceDisplayNamePrefix"></a>

```csharp
public string InstanceDisplayNamePrefix { get; }
```

- *Type:* string

---

##### `IsShieldedInstanceEnabled`<sup>Required</sup> <a name="IsShieldedInstanceEnabled" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.isShieldedInstanceEnabled"></a>

```csharp
public IResolvable IsShieldedInstanceEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.networkConfiguration"></a>

```csharp
public DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList NetworkConfiguration { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList">DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationList</a>

---

##### `VsphereType`<sup>Required</sup> <a name="VsphereType" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.vsphereType"></a>

```csharp
public string VsphereType { get; }
```

- *Type:* string

---

##### `WorkloadNetworkCidr`<sup>Required</sup> <a name="WorkloadNetworkCidr" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.workloadNetworkCidr"></a>

```csharp
public string WorkloadNetworkCidr { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.internalValue"></a>

```csharp
public DataOciOcvpSddcInitialConfigurationInitialClusterConfigurations InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurations">DataOciOcvpSddcInitialConfigurationInitialClusterConfigurations</a>

---


### DataOciOcvpSddcInitialConfigurationList <a name="DataOciOcvpSddcInitialConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcInitialConfigurationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationList.get"></a>

```csharp
private DataOciOcvpSddcInitialConfigurationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOcvpSddcInitialConfigurationOutputReference <a name="DataOciOcvpSddcInitialConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcInitialConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.property.initialClusterConfigurations">InitialClusterConfigurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsList">DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfiguration">DataOciOcvpSddcInitialConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InitialClusterConfigurations`<sup>Required</sup> <a name="InitialClusterConfigurations" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.property.initialClusterConfigurations"></a>

```csharp
public DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsList InitialClusterConfigurations { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsList">DataOciOcvpSddcInitialConfigurationInitialClusterConfigurationsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfigurationOutputReference.property.internalValue"></a>

```csharp
public DataOciOcvpSddcInitialConfiguration InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcInitialConfiguration">DataOciOcvpSddcInitialConfiguration</a>

---


### DataOciOcvpSddcUpgradeLicensesList <a name="DataOciOcvpSddcUpgradeLicensesList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcUpgradeLicensesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesList.get"></a>

```csharp
private DataOciOcvpSddcUpgradeLicensesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOcvpSddcUpgradeLicensesOutputReference <a name="DataOciOcvpSddcUpgradeLicensesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcUpgradeLicensesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.property.licenseKey">LicenseKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.property.licenseType">LicenseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicenses">DataOciOcvpSddcUpgradeLicenses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LicenseKey`<sup>Required</sup> <a name="LicenseKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.property.licenseKey"></a>

```csharp
public string LicenseKey { get; }
```

- *Type:* string

---

##### `LicenseType`<sup>Required</sup> <a name="LicenseType" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.property.licenseType"></a>

```csharp
public string LicenseType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicensesOutputReference.property.internalValue"></a>

```csharp
public DataOciOcvpSddcUpgradeLicenses InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcUpgradeLicenses">DataOciOcvpSddcUpgradeLicenses</a>

---


### DataOciOcvpSddcVsphereUpgradeObjectsList <a name="DataOciOcvpSddcVsphereUpgradeObjectsList" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcVsphereUpgradeObjectsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsList.get"></a>

```csharp
private DataOciOcvpSddcVsphereUpgradeObjectsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOcvpSddcVsphereUpgradeObjectsOutputReference <a name="DataOciOcvpSddcVsphereUpgradeObjectsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOcvpSddcVsphereUpgradeObjectsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.property.downloadLink">DownloadLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.property.linkDescription">LinkDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjects">DataOciOcvpSddcVsphereUpgradeObjects</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DownloadLink`<sup>Required</sup> <a name="DownloadLink" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.property.downloadLink"></a>

```csharp
public string DownloadLink { get; }
```

- *Type:* string

---

##### `LinkDescription`<sup>Required</sup> <a name="LinkDescription" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.property.linkDescription"></a>

```csharp
public string LinkDescription { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjectsOutputReference.property.internalValue"></a>

```csharp
public DataOciOcvpSddcVsphereUpgradeObjects InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOcvpSddc.DataOciOcvpSddcVsphereUpgradeObjects">DataOciOcvpSddcVsphereUpgradeObjects</a>

---



