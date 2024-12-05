# `dataOciBlockchainBlockchainPlatform` Submodule <a name="`dataOciBlockchainBlockchainPlatform` Submodule" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciBlockchainBlockchainPlatform <a name="DataOciBlockchainBlockchainPlatform" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform oci_blockchain_blockchain_platform}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatform(Construct Scope, string Id, DataOciBlockchainBlockchainPlatformConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig">DataOciBlockchainBlockchainPlatformConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig">DataOciBlockchainBlockchainPlatformConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciBlockchainBlockchainPlatform resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciBlockchainBlockchainPlatform.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciBlockchainBlockchainPlatform.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciBlockchainBlockchainPlatform.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciBlockchainBlockchainPlatform.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciBlockchainBlockchainPlatform resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciBlockchainBlockchainPlatform to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciBlockchainBlockchainPlatform that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciBlockchainBlockchainPlatform to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.caCertArchiveText">CaCertArchiveText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.componentDetails">ComponentDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList">DataOciBlockchainBlockchainPlatformComponentDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.computeShape">ComputeShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.federatedUserId">FederatedUserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.hostOcpuUtilizationInfo">HostOcpuUtilizationInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList">DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.idcsAccessToken">IdcsAccessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.isByol">IsByol</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.isMultiAd">IsMultiAd</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.loadBalancerShape">LoadBalancerShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.platformRole">PlatformRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.platformShapeType">PlatformShapeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.platformVersion">PlatformVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.replicas">Replicas</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList">DataOciBlockchainBlockchainPlatformReplicasList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.serviceEndpoint">ServiceEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.serviceVersion">ServiceVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.storageSizeInTbs">StorageSizeInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.storageUsedInTbs">StorageUsedInTbs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.totalOcpuCapacity">TotalOcpuCapacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.blockchainPlatformIdInput">BlockchainPlatformIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.blockchainPlatformId">BlockchainPlatformId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CaCertArchiveText`<sup>Required</sup> <a name="CaCertArchiveText" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.caCertArchiveText"></a>

```csharp
public string CaCertArchiveText { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `ComponentDetails`<sup>Required</sup> <a name="ComponentDetails" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.componentDetails"></a>

```csharp
public DataOciBlockchainBlockchainPlatformComponentDetailsList ComponentDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList">DataOciBlockchainBlockchainPlatformComponentDetailsList</a>

---

##### `ComputeShape`<sup>Required</sup> <a name="ComputeShape" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.computeShape"></a>

```csharp
public string ComputeShape { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FederatedUserId`<sup>Required</sup> <a name="FederatedUserId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.federatedUserId"></a>

```csharp
public string FederatedUserId { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `HostOcpuUtilizationInfo`<sup>Required</sup> <a name="HostOcpuUtilizationInfo" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.hostOcpuUtilizationInfo"></a>

```csharp
public DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList HostOcpuUtilizationInfo { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList">DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IdcsAccessToken`<sup>Required</sup> <a name="IdcsAccessToken" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.idcsAccessToken"></a>

```csharp
public string IdcsAccessToken { get; }
```

- *Type:* string

---

##### `IsByol`<sup>Required</sup> <a name="IsByol" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.isByol"></a>

```csharp
public IResolvable IsByol { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsMultiAd`<sup>Required</sup> <a name="IsMultiAd" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.isMultiAd"></a>

```csharp
public IResolvable IsMultiAd { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `LoadBalancerShape`<sup>Required</sup> <a name="LoadBalancerShape" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.loadBalancerShape"></a>

```csharp
public string LoadBalancerShape { get; }
```

- *Type:* string

---

##### `PlatformRole`<sup>Required</sup> <a name="PlatformRole" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.platformRole"></a>

```csharp
public string PlatformRole { get; }
```

- *Type:* string

---

##### `PlatformShapeType`<sup>Required</sup> <a name="PlatformShapeType" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.platformShapeType"></a>

```csharp
public string PlatformShapeType { get; }
```

- *Type:* string

---

##### `PlatformVersion`<sup>Required</sup> <a name="PlatformVersion" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.platformVersion"></a>

```csharp
public string PlatformVersion { get; }
```

- *Type:* string

---

##### `Replicas`<sup>Required</sup> <a name="Replicas" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.replicas"></a>

```csharp
public DataOciBlockchainBlockchainPlatformReplicasList Replicas { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList">DataOciBlockchainBlockchainPlatformReplicasList</a>

---

##### `ServiceEndpoint`<sup>Required</sup> <a name="ServiceEndpoint" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.serviceEndpoint"></a>

```csharp
public string ServiceEndpoint { get; }
```

- *Type:* string

---

##### `ServiceVersion`<sup>Required</sup> <a name="ServiceVersion" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.serviceVersion"></a>

```csharp
public string ServiceVersion { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StorageSizeInTbs`<sup>Required</sup> <a name="StorageSizeInTbs" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.storageSizeInTbs"></a>

```csharp
public double StorageSizeInTbs { get; }
```

- *Type:* double

---

##### `StorageUsedInTbs`<sup>Required</sup> <a name="StorageUsedInTbs" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.storageUsedInTbs"></a>

```csharp
public double StorageUsedInTbs { get; }
```

- *Type:* double

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `TotalOcpuCapacity`<sup>Required</sup> <a name="TotalOcpuCapacity" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.totalOcpuCapacity"></a>

```csharp
public double TotalOcpuCapacity { get; }
```

- *Type:* double

---

##### `BlockchainPlatformIdInput`<sup>Optional</sup> <a name="BlockchainPlatformIdInput" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.blockchainPlatformIdInput"></a>

```csharp
public string BlockchainPlatformIdInput { get; }
```

- *Type:* string

---

##### `BlockchainPlatformId`<sup>Required</sup> <a name="BlockchainPlatformId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.blockchainPlatformId"></a>

```csharp
public string BlockchainPlatformId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatform.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciBlockchainBlockchainPlatformComponentDetails <a name="DataOciBlockchainBlockchainPlatformComponentDetails" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformComponentDetails {

};
```


### DataOciBlockchainBlockchainPlatformComponentDetailsOsns <a name="DataOciBlockchainBlockchainPlatformComponentDetailsOsns" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsns.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformComponentDetailsOsns {

};
```


### DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam <a name="DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam {

};
```


### DataOciBlockchainBlockchainPlatformComponentDetailsPeers <a name="DataOciBlockchainBlockchainPlatformComponentDetailsPeers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformComponentDetailsPeers {

};
```


### DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam <a name="DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam {

};
```


### DataOciBlockchainBlockchainPlatformConfig <a name="DataOciBlockchainBlockchainPlatformConfig" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BlockchainPlatformId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig.property.blockchainPlatformId">BlockchainPlatformId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform#blockchain_platform_id DataOciBlockchainBlockchainPlatform#blockchain_platform_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BlockchainPlatformId`<sup>Required</sup> <a name="BlockchainPlatformId" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformConfig.property.blockchainPlatformId"></a>

```csharp
public string BlockchainPlatformId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/blockchain_blockchain_platform#blockchain_platform_id DataOciBlockchainBlockchainPlatform#blockchain_platform_id}.

---

### DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfo <a name="DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfo" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfo {

};
```


### DataOciBlockchainBlockchainPlatformReplicas <a name="DataOciBlockchainBlockchainPlatformReplicas" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicas"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicas.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformReplicas {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciBlockchainBlockchainPlatformComponentDetailsList <a name="DataOciBlockchainBlockchainPlatformComponentDetailsList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformComponentDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.get"></a>

```csharp
private DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList <a name="DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.get"></a>

```csharp
private DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList <a name="DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.get"></a>

```csharp
private DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference <a name="DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.ocpuAllocationNumber">OcpuAllocationNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam">DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OcpuAllocationNumber`<sup>Required</sup> <a name="OcpuAllocationNumber" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.ocpuAllocationNumber"></a>

```csharp
public double OcpuAllocationNumber { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamOutputReference.property.internalValue"></a>

```csharp
public DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam">DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParam</a>

---


### DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference <a name="DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.ad">Ad</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.ocpuAllocationParam">OcpuAllocationParam</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList">DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.osnKey">OsnKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsns">DataOciBlockchainBlockchainPlatformComponentDetailsOsns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ad`<sup>Required</sup> <a name="Ad" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.ad"></a>

```csharp
public string Ad { get; }
```

- *Type:* string

---

##### `OcpuAllocationParam`<sup>Required</sup> <a name="OcpuAllocationParam" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.ocpuAllocationParam"></a>

```csharp
public DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList OcpuAllocationParam { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList">DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOcpuAllocationParamList</a>

---

##### `OsnKey`<sup>Required</sup> <a name="OsnKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.osnKey"></a>

```csharp
public string OsnKey { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsOutputReference.property.internalValue"></a>

```csharp
public DataOciBlockchainBlockchainPlatformComponentDetailsOsns InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsns">DataOciBlockchainBlockchainPlatformComponentDetailsOsns</a>

---


### DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference <a name="DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.property.osns">Osns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList">DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.property.peers">Peers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList">DataOciBlockchainBlockchainPlatformComponentDetailsPeersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetails">DataOciBlockchainBlockchainPlatformComponentDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Osns`<sup>Required</sup> <a name="Osns" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.property.osns"></a>

```csharp
public DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList Osns { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList">DataOciBlockchainBlockchainPlatformComponentDetailsOsnsList</a>

---

##### `Peers`<sup>Required</sup> <a name="Peers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.property.peers"></a>

```csharp
public DataOciBlockchainBlockchainPlatformComponentDetailsPeersList Peers { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList">DataOciBlockchainBlockchainPlatformComponentDetailsPeersList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciBlockchainBlockchainPlatformComponentDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetails">DataOciBlockchainBlockchainPlatformComponentDetails</a>

---


### DataOciBlockchainBlockchainPlatformComponentDetailsPeersList <a name="DataOciBlockchainBlockchainPlatformComponentDetailsPeersList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformComponentDetailsPeersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.get"></a>

```csharp
private DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList <a name="DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.get"></a>

```csharp
private DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference <a name="DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.ocpuAllocationNumber">OcpuAllocationNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam">DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OcpuAllocationNumber`<sup>Required</sup> <a name="OcpuAllocationNumber" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.ocpuAllocationNumber"></a>

```csharp
public double OcpuAllocationNumber { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamOutputReference.property.internalValue"></a>

```csharp
public DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam">DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParam</a>

---


### DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference <a name="DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.ad">Ad</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.ocpuAllocationParam">OcpuAllocationParam</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList">DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.peerKey">PeerKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeers">DataOciBlockchainBlockchainPlatformComponentDetailsPeers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ad`<sup>Required</sup> <a name="Ad" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.ad"></a>

```csharp
public string Ad { get; }
```

- *Type:* string

---

##### `Alias`<sup>Required</sup> <a name="Alias" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `OcpuAllocationParam`<sup>Required</sup> <a name="OcpuAllocationParam" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.ocpuAllocationParam"></a>

```csharp
public DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList OcpuAllocationParam { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList">DataOciBlockchainBlockchainPlatformComponentDetailsPeersOcpuAllocationParamList</a>

---

##### `PeerKey`<sup>Required</sup> <a name="PeerKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.peerKey"></a>

```csharp
public string PeerKey { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeersOutputReference.property.internalValue"></a>

```csharp
public DataOciBlockchainBlockchainPlatformComponentDetailsPeers InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformComponentDetailsPeers">DataOciBlockchainBlockchainPlatformComponentDetailsPeers</a>

---


### DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList <a name="DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.get"></a>

```csharp
private DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference <a name="DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.ocpuCapacityNumber">OcpuCapacityNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.ocpuUtilizationNumber">OcpuUtilizationNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfo">DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `OcpuCapacityNumber`<sup>Required</sup> <a name="OcpuCapacityNumber" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.ocpuCapacityNumber"></a>

```csharp
public double OcpuCapacityNumber { get; }
```

- *Type:* double

---

##### `OcpuUtilizationNumber`<sup>Required</sup> <a name="OcpuUtilizationNumber" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.ocpuUtilizationNumber"></a>

```csharp
public double OcpuUtilizationNumber { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfoOutputReference.property.internalValue"></a>

```csharp
public DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfo InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfo">DataOciBlockchainBlockchainPlatformHostOcpuUtilizationInfo</a>

---


### DataOciBlockchainBlockchainPlatformReplicasList <a name="DataOciBlockchainBlockchainPlatformReplicasList" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformReplicasList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.get"></a>

```csharp
private DataOciBlockchainBlockchainPlatformReplicasOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciBlockchainBlockchainPlatformReplicasOutputReference <a name="DataOciBlockchainBlockchainPlatformReplicasOutputReference" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBlockchainBlockchainPlatformReplicasOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.property.caCount">CaCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.property.consoleCount">ConsoleCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.property.proxyCount">ProxyCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicas">DataOciBlockchainBlockchainPlatformReplicas</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CaCount`<sup>Required</sup> <a name="CaCount" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.property.caCount"></a>

```csharp
public double CaCount { get; }
```

- *Type:* double

---

##### `ConsoleCount`<sup>Required</sup> <a name="ConsoleCount" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.property.consoleCount"></a>

```csharp
public double ConsoleCount { get; }
```

- *Type:* double

---

##### `ProxyCount`<sup>Required</sup> <a name="ProxyCount" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.property.proxyCount"></a>

```csharp
public double ProxyCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicasOutputReference.property.internalValue"></a>

```csharp
public DataOciBlockchainBlockchainPlatformReplicas InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBlockchainBlockchainPlatform.DataOciBlockchainBlockchainPlatformReplicas">DataOciBlockchainBlockchainPlatformReplicas</a>

---



