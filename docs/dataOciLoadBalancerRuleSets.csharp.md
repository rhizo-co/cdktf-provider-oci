# `dataOciLoadBalancerRuleSets` Submodule <a name="`dataOciLoadBalancerRuleSets` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLoadBalancerRuleSets <a name="DataOciLoadBalancerRuleSets" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_rule_sets oci_load_balancer_rule_sets}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerRuleSets(Construct Scope, string Id, DataOciLoadBalancerRuleSetsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsConfig">DataOciLoadBalancerRuleSetsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsConfig">DataOciLoadBalancerRuleSetsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLoadBalancerRuleSets resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLoadBalancerRuleSets.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLoadBalancerRuleSets.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLoadBalancerRuleSets.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLoadBalancerRuleSets.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciLoadBalancerRuleSets resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciLoadBalancerRuleSets to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciLoadBalancerRuleSets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_rule_sets#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLoadBalancerRuleSets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterList">DataOciLoadBalancerRuleSetsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.property.ruleSets">RuleSets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsList">DataOciLoadBalancerRuleSetsRuleSetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.property.loadBalancerIdInput">LoadBalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.property.loadBalancerId">LoadBalancerId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.property.filter"></a>

```csharp
public DataOciLoadBalancerRuleSetsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterList">DataOciLoadBalancerRuleSetsFilterList</a>

---

##### `RuleSets`<sup>Required</sup> <a name="RuleSets" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.property.ruleSets"></a>

```csharp
public DataOciLoadBalancerRuleSetsRuleSetsList RuleSets { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsList">DataOciLoadBalancerRuleSetsRuleSetsList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LoadBalancerIdInput`<sup>Optional</sup> <a name="LoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.property.loadBalancerIdInput"></a>

```csharp
public string LoadBalancerIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.property.loadBalancerId"></a>

```csharp
public string LoadBalancerId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSets.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLoadBalancerRuleSetsConfig <a name="DataOciLoadBalancerRuleSetsConfig" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerRuleSetsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string LoadBalancerId,
    object Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsConfig.property.loadBalancerId">LoadBalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_rule_sets#load_balancer_id DataOciLoadBalancerRuleSets#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_rule_sets#id DataOciLoadBalancerRuleSets#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsConfig.property.loadBalancerId"></a>

```csharp
public string LoadBalancerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_rule_sets#load_balancer_id DataOciLoadBalancerRuleSets#load_balancer_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_rule_sets#filter DataOciLoadBalancerRuleSets#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_rule_sets#id DataOciLoadBalancerRuleSets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciLoadBalancerRuleSetsFilter <a name="DataOciLoadBalancerRuleSetsFilter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerRuleSetsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_rule_sets#name DataOciLoadBalancerRuleSets#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_rule_sets#values DataOciLoadBalancerRuleSets#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_rule_sets#regex DataOciLoadBalancerRuleSets#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_rule_sets#name DataOciLoadBalancerRuleSets#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_rule_sets#values DataOciLoadBalancerRuleSets#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_rule_sets#regex DataOciLoadBalancerRuleSets#regex}.

---

### DataOciLoadBalancerRuleSetsRuleSets <a name="DataOciLoadBalancerRuleSetsRuleSets" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerRuleSetsRuleSets {

};
```


### DataOciLoadBalancerRuleSetsRuleSetsItems <a name="DataOciLoadBalancerRuleSetsRuleSetsItems" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItems.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerRuleSetsRuleSetsItems {

};
```


### DataOciLoadBalancerRuleSetsRuleSetsItemsConditions <a name="DataOciLoadBalancerRuleSetsRuleSetsItemsConditions" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerRuleSetsRuleSetsItemsConditions {

};
```


### DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnections <a name="DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnections" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnections"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnections.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnections {

};
```


### DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUri <a name="DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUri" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUri"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUri.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUri {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLoadBalancerRuleSetsFilterList <a name="DataOciLoadBalancerRuleSetsFilterList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerRuleSetsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterList.get"></a>

```csharp
private DataOciLoadBalancerRuleSetsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciLoadBalancerRuleSetsFilterOutputReference <a name="DataOciLoadBalancerRuleSetsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerRuleSetsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsList <a name="DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsList.get"></a>

```csharp
private DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference <a name="DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.property.attributeName">AttributeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.property.attributeValue">AttributeValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditions">DataOciLoadBalancerRuleSetsRuleSetsItemsConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributeName`<sup>Required</sup> <a name="AttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.property.attributeName"></a>

```csharp
public string AttributeName { get; }
```

- *Type:* string

---

##### `AttributeValue`<sup>Required</sup> <a name="AttributeValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.property.attributeValue"></a>

```csharp
public string AttributeValue { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsOutputReference.property.internalValue"></a>

```csharp
public DataOciLoadBalancerRuleSetsRuleSetsItemsConditions InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditions">DataOciLoadBalancerRuleSetsRuleSetsItemsConditions</a>

---


### DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsList <a name="DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsList.get"></a>

```csharp
private DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference <a name="DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.property.ipAddresses">IpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.property.maxConnections">MaxConnections</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnections">DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnections</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.property.ipAddresses"></a>

```csharp
public string[] IpAddresses { get; }
```

- *Type:* string[]

---

##### `MaxConnections`<sup>Required</sup> <a name="MaxConnections" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.property.maxConnections"></a>

```csharp
public double MaxConnections { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsOutputReference.property.internalValue"></a>

```csharp
public DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnections InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnections">DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnections</a>

---


### DataOciLoadBalancerRuleSetsRuleSetsItemsList <a name="DataOciLoadBalancerRuleSetsRuleSetsItemsList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerRuleSetsRuleSetsItemsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsList.get"></a>

```csharp
private DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference <a name="DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.property.allowedMethods">AllowedMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.property.areInvalidCharactersAllowed">AreInvalidCharactersAllowed</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.property.conditions">Conditions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsList">DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.property.defaultMaxConnections">DefaultMaxConnections</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.property.header">Header</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.property.httpLargeHeaderSizeInKb">HttpLargeHeaderSizeInKb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.property.ipMaxConnections">IpMaxConnections</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsList">DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.property.redirectUri">RedirectUri</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriList">DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.property.responseCode">ResponseCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.property.statusCode">StatusCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.property.suffix">Suffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItems">DataOciLoadBalancerRuleSetsRuleSetsItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `AllowedMethods`<sup>Required</sup> <a name="AllowedMethods" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.property.allowedMethods"></a>

```csharp
public string[] AllowedMethods { get; }
```

- *Type:* string[]

---

##### `AreInvalidCharactersAllowed`<sup>Required</sup> <a name="AreInvalidCharactersAllowed" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.property.areInvalidCharactersAllowed"></a>

```csharp
public IResolvable AreInvalidCharactersAllowed { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.property.conditions"></a>

```csharp
public DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsList Conditions { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsList">DataOciLoadBalancerRuleSetsRuleSetsItemsConditionsList</a>

---

##### `DefaultMaxConnections`<sup>Required</sup> <a name="DefaultMaxConnections" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.property.defaultMaxConnections"></a>

```csharp
public double DefaultMaxConnections { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Header`<sup>Required</sup> <a name="Header" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.property.header"></a>

```csharp
public string Header { get; }
```

- *Type:* string

---

##### `HttpLargeHeaderSizeInKb`<sup>Required</sup> <a name="HttpLargeHeaderSizeInKb" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.property.httpLargeHeaderSizeInKb"></a>

```csharp
public double HttpLargeHeaderSizeInKb { get; }
```

- *Type:* double

---

##### `IpMaxConnections`<sup>Required</sup> <a name="IpMaxConnections" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.property.ipMaxConnections"></a>

```csharp
public DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsList IpMaxConnections { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsList">DataOciLoadBalancerRuleSetsRuleSetsItemsIpMaxConnectionsList</a>

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `RedirectUri`<sup>Required</sup> <a name="RedirectUri" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.property.redirectUri"></a>

```csharp
public DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriList RedirectUri { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriList">DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriList</a>

---

##### `ResponseCode`<sup>Required</sup> <a name="ResponseCode" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.property.responseCode"></a>

```csharp
public double ResponseCode { get; }
```

- *Type:* double

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.property.statusCode"></a>

```csharp
public double StatusCode { get; }
```

- *Type:* double

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.property.suffix"></a>

```csharp
public string Suffix { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsOutputReference.property.internalValue"></a>

```csharp
public DataOciLoadBalancerRuleSetsRuleSetsItems InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItems">DataOciLoadBalancerRuleSetsRuleSetsItems</a>

---


### DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriList <a name="DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriList.get"></a>

```csharp
private DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference <a name="DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUri">DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUri</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `Query`<sup>Required</sup> <a name="Query" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUriOutputReference.property.internalValue"></a>

```csharp
public DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUri InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUri">DataOciLoadBalancerRuleSetsRuleSetsItemsRedirectUri</a>

---


### DataOciLoadBalancerRuleSetsRuleSetsList <a name="DataOciLoadBalancerRuleSetsRuleSetsList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerRuleSetsRuleSetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsList.get"></a>

```csharp
private DataOciLoadBalancerRuleSetsRuleSetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLoadBalancerRuleSetsRuleSetsOutputReference <a name="DataOciLoadBalancerRuleSetsRuleSetsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerRuleSetsRuleSetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsList">DataOciLoadBalancerRuleSetsRuleSetsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.property.loadBalancerId">LoadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSets">DataOciLoadBalancerRuleSetsRuleSets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.property.items"></a>

```csharp
public DataOciLoadBalancerRuleSetsRuleSetsItemsList Items { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsItemsList">DataOciLoadBalancerRuleSetsRuleSetsItemsList</a>

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.property.loadBalancerId"></a>

```csharp
public string LoadBalancerId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSetsOutputReference.property.internalValue"></a>

```csharp
public DataOciLoadBalancerRuleSetsRuleSets InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerRuleSets.DataOciLoadBalancerRuleSetsRuleSets">DataOciLoadBalancerRuleSetsRuleSets</a>

---



