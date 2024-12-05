# `dataOciLoadBalancerLoadBalancers` Submodule <a name="`dataOciLoadBalancerLoadBalancers` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLoadBalancerLoadBalancers <a name="DataOciLoadBalancerLoadBalancers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers oci_load_balancer_load_balancers}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerLoadBalancers(Construct Scope, string Id, DataOciLoadBalancerLoadBalancersConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig">DataOciLoadBalancerLoadBalancersConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig">DataOciLoadBalancerLoadBalancersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.resetDetail">ResetDetail</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetDetail` <a name="ResetDetail" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.resetDetail"></a>

```csharp
private void ResetDetail()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.resetState"></a>

```csharp
private void ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLoadBalancerLoadBalancers resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLoadBalancerLoadBalancers.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLoadBalancerLoadBalancers.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLoadBalancerLoadBalancers.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLoadBalancerLoadBalancers.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciLoadBalancerLoadBalancers resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciLoadBalancerLoadBalancers to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciLoadBalancerLoadBalancers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLoadBalancerLoadBalancers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList">DataOciLoadBalancerLoadBalancersFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.loadBalancers">LoadBalancers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList">DataOciLoadBalancerLoadBalancersLoadBalancersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.detailInput">DetailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.stateInput">StateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.detail">Detail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.state">State</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.filter"></a>

```csharp
public DataOciLoadBalancerLoadBalancersFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList">DataOciLoadBalancerLoadBalancersFilterList</a>

---

##### `LoadBalancers`<sup>Required</sup> <a name="LoadBalancers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.loadBalancers"></a>

```csharp
public DataOciLoadBalancerLoadBalancersLoadBalancersList LoadBalancers { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList">DataOciLoadBalancerLoadBalancersLoadBalancersList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `DetailInput`<sup>Optional</sup> <a name="DetailInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.detailInput"></a>

```csharp
public string DetailInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.stateInput"></a>

```csharp
public string StateInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Detail`<sup>Required</sup> <a name="Detail" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.detail"></a>

```csharp
public string Detail { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancers.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLoadBalancerLoadBalancersConfig <a name="DataOciLoadBalancerLoadBalancersConfig" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerLoadBalancersConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string Detail = null,
    string DisplayName = null,
    object Filter = null,
    string Id = null,
    string State = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#compartment_id DataOciLoadBalancerLoadBalancers#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.detail">Detail</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#detail DataOciLoadBalancerLoadBalancers#detail}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.displayName">DisplayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#display_name DataOciLoadBalancerLoadBalancers#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#id DataOciLoadBalancerLoadBalancers#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.state">State</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#state DataOciLoadBalancerLoadBalancers#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#compartment_id DataOciLoadBalancerLoadBalancers#compartment_id}.

---

##### `Detail`<sup>Optional</sup> <a name="Detail" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.detail"></a>

```csharp
public string Detail { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#detail DataOciLoadBalancerLoadBalancers#detail}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#display_name DataOciLoadBalancerLoadBalancers#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#filter DataOciLoadBalancerLoadBalancers#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#id DataOciLoadBalancerLoadBalancers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersConfig.property.state"></a>

```csharp
public string State { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#state DataOciLoadBalancerLoadBalancers#state}.

---

### DataOciLoadBalancerLoadBalancersFilter <a name="DataOciLoadBalancerLoadBalancersFilter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerLoadBalancersFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#name DataOciLoadBalancerLoadBalancers#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#values DataOciLoadBalancerLoadBalancers#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#regex DataOciLoadBalancerLoadBalancers#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#name DataOciLoadBalancerLoadBalancers#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#values DataOciLoadBalancerLoadBalancers#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_load_balancers#regex DataOciLoadBalancerLoadBalancers#regex}.

---

### DataOciLoadBalancerLoadBalancersLoadBalancers <a name="DataOciLoadBalancerLoadBalancersLoadBalancers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerLoadBalancersLoadBalancers {

};
```


### DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetails <a name="DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetails" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetails {

};
```


### DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIp <a name="DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIp" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIp"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIp.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIp {

};
```


### DataOciLoadBalancerLoadBalancersLoadBalancersReservedIps <a name="DataOciLoadBalancerLoadBalancersLoadBalancersReservedIps" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIps"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIps.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerLoadBalancersLoadBalancersReservedIps {

};
```


### DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetails <a name="DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetails" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetails {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLoadBalancerLoadBalancersFilterList <a name="DataOciLoadBalancerLoadBalancersFilterList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerLoadBalancersFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.get"></a>

```csharp
private DataOciLoadBalancerLoadBalancersFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciLoadBalancerLoadBalancersFilterOutputReference <a name="DataOciLoadBalancerLoadBalancersFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerLoadBalancersFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList <a name="DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.get"></a>

```csharp
private DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference <a name="DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.property.isPublic">IsPublic</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.property.reservedIp">ReservedIp</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList">DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetails">DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `IsPublic`<sup>Required</sup> <a name="IsPublic" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.property.isPublic"></a>

```csharp
public IResolvable IsPublic { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ReservedIp`<sup>Required</sup> <a name="ReservedIp" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.property.reservedIp"></a>

```csharp
public DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList ReservedIp { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList">DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetails">DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetails</a>

---


### DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList <a name="DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.get"></a>

```csharp
private DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference <a name="DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIp">DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIpOutputReference.property.internalValue"></a>

```csharp
public DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIp InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIp">DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsReservedIp</a>

---


### DataOciLoadBalancerLoadBalancersLoadBalancersList <a name="DataOciLoadBalancerLoadBalancersLoadBalancersList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerLoadBalancersLoadBalancersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.get"></a>

```csharp
private DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference <a name="DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.ipAddressDetails">IpAddressDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList">DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.ipAddresses">IpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.ipMode">IpMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.isDeleteProtectionEnabled">IsDeleteProtectionEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.isPrivate">IsPrivate</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.isRequestIdEnabled">IsRequestIdEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.networkSecurityGroupIds">NetworkSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.requestIdHeader">RequestIdHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.reservedIps">ReservedIps</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList">DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.shape">Shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.shapeDetails">ShapeDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList">DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.subnetIds">SubnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.systemTags">SystemTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancers">DataOciLoadBalancerLoadBalancersLoadBalancers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpAddressDetails`<sup>Required</sup> <a name="IpAddressDetails" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.ipAddressDetails"></a>

```csharp
public DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList IpAddressDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList">DataOciLoadBalancerLoadBalancersLoadBalancersIpAddressDetailsList</a>

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.ipAddresses"></a>

```csharp
public string[] IpAddresses { get; }
```

- *Type:* string[]

---

##### `IpMode`<sup>Required</sup> <a name="IpMode" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.ipMode"></a>

```csharp
public string IpMode { get; }
```

- *Type:* string

---

##### `IsDeleteProtectionEnabled`<sup>Required</sup> <a name="IsDeleteProtectionEnabled" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.isDeleteProtectionEnabled"></a>

```csharp
public IResolvable IsDeleteProtectionEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsPrivate`<sup>Required</sup> <a name="IsPrivate" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.isPrivate"></a>

```csharp
public IResolvable IsPrivate { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsRequestIdEnabled`<sup>Required</sup> <a name="IsRequestIdEnabled" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.isRequestIdEnabled"></a>

```csharp
public IResolvable IsRequestIdEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `NetworkSecurityGroupIds`<sup>Required</sup> <a name="NetworkSecurityGroupIds" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.networkSecurityGroupIds"></a>

```csharp
public string[] NetworkSecurityGroupIds { get; }
```

- *Type:* string[]

---

##### `RequestIdHeader`<sup>Required</sup> <a name="RequestIdHeader" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.requestIdHeader"></a>

```csharp
public string RequestIdHeader { get; }
```

- *Type:* string

---

##### `ReservedIps`<sup>Required</sup> <a name="ReservedIps" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.reservedIps"></a>

```csharp
public DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList ReservedIps { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList">DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList</a>

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.shape"></a>

```csharp
public string Shape { get; }
```

- *Type:* string

---

##### `ShapeDetails`<sup>Required</sup> <a name="ShapeDetails" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.shapeDetails"></a>

```csharp
public DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList ShapeDetails { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList">DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.subnetIds"></a>

```csharp
public string[] SubnetIds { get; }
```

- *Type:* string[]

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.systemTags"></a>

```csharp
public StringMap SystemTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersOutputReference.property.internalValue"></a>

```csharp
public DataOciLoadBalancerLoadBalancersLoadBalancers InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancers">DataOciLoadBalancerLoadBalancersLoadBalancers</a>

---


### DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList <a name="DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.get"></a>

```csharp
private DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference <a name="DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIps">DataOciLoadBalancerLoadBalancersLoadBalancersReservedIps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIpsOutputReference.property.internalValue"></a>

```csharp
public DataOciLoadBalancerLoadBalancersLoadBalancersReservedIps InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersReservedIps">DataOciLoadBalancerLoadBalancersLoadBalancersReservedIps</a>

---


### DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList <a name="DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.get"></a>

```csharp
private DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference <a name="DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.property.maximumBandwidthInMbps">MaximumBandwidthInMbps</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.property.minimumBandwidthInMbps">MinimumBandwidthInMbps</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetails">DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MaximumBandwidthInMbps`<sup>Required</sup> <a name="MaximumBandwidthInMbps" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.property.maximumBandwidthInMbps"></a>

```csharp
public double MaximumBandwidthInMbps { get; }
```

- *Type:* double

---

##### `MinimumBandwidthInMbps`<sup>Required</sup> <a name="MinimumBandwidthInMbps" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.property.minimumBandwidthInMbps"></a>

```csharp
public double MinimumBandwidthInMbps { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetailsOutputReference.property.internalValue"></a>

```csharp
public DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetails InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerLoadBalancers.DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetails">DataOciLoadBalancerLoadBalancersLoadBalancersShapeDetails</a>

---



