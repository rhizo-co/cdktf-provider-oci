# `dataOciLoadBalancerPathRouteSets` Submodule <a name="`dataOciLoadBalancerPathRouteSets` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLoadBalancerPathRouteSets <a name="DataOciLoadBalancerPathRouteSets" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_path_route_sets oci_load_balancer_path_route_sets}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerPathRouteSets(Construct Scope, string Id, DataOciLoadBalancerPathRouteSetsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsConfig">DataOciLoadBalancerPathRouteSetsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsConfig">DataOciLoadBalancerPathRouteSetsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciLoadBalancerPathRouteSets resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLoadBalancerPathRouteSets.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLoadBalancerPathRouteSets.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLoadBalancerPathRouteSets.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciLoadBalancerPathRouteSets.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciLoadBalancerPathRouteSets resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciLoadBalancerPathRouteSets to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciLoadBalancerPathRouteSets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_path_route_sets#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLoadBalancerPathRouteSets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList">DataOciLoadBalancerPathRouteSetsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.pathRouteSets">PathRouteSets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList">DataOciLoadBalancerPathRouteSetsPathRouteSetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.loadBalancerIdInput">LoadBalancerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.loadBalancerId">LoadBalancerId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.filter"></a>

```csharp
public DataOciLoadBalancerPathRouteSetsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList">DataOciLoadBalancerPathRouteSetsFilterList</a>

---

##### `PathRouteSets`<sup>Required</sup> <a name="PathRouteSets" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.pathRouteSets"></a>

```csharp
public DataOciLoadBalancerPathRouteSetsPathRouteSetsList PathRouteSets { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList">DataOciLoadBalancerPathRouteSetsPathRouteSetsList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LoadBalancerIdInput`<sup>Optional</sup> <a name="LoadBalancerIdInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.loadBalancerIdInput"></a>

```csharp
public string LoadBalancerIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.loadBalancerId"></a>

```csharp
public string LoadBalancerId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSets.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLoadBalancerPathRouteSetsConfig <a name="DataOciLoadBalancerPathRouteSetsConfig" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerPathRouteSetsConfig {
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsConfig.property.loadBalancerId">LoadBalancerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_path_route_sets#load_balancer_id DataOciLoadBalancerPathRouteSets#load_balancer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_path_route_sets#id DataOciLoadBalancerPathRouteSets#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsConfig.property.loadBalancerId"></a>

```csharp
public string LoadBalancerId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_path_route_sets#load_balancer_id DataOciLoadBalancerPathRouteSets#load_balancer_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_path_route_sets#filter DataOciLoadBalancerPathRouteSets#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_path_route_sets#id DataOciLoadBalancerPathRouteSets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciLoadBalancerPathRouteSetsFilter <a name="DataOciLoadBalancerPathRouteSetsFilter" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerPathRouteSetsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_path_route_sets#name DataOciLoadBalancerPathRouteSets#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_path_route_sets#values DataOciLoadBalancerPathRouteSets#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_path_route_sets#regex DataOciLoadBalancerPathRouteSets#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_path_route_sets#name DataOciLoadBalancerPathRouteSets#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_path_route_sets#values DataOciLoadBalancerPathRouteSets#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/load_balancer_path_route_sets#regex DataOciLoadBalancerPathRouteSets#regex}.

---

### DataOciLoadBalancerPathRouteSetsPathRouteSets <a name="DataOciLoadBalancerPathRouteSetsPathRouteSets" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerPathRouteSetsPathRouteSets {

};
```


### DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutes <a name="DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutes" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutes {

};
```


### DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchType <a name="DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchType" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchType"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchType.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchType {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLoadBalancerPathRouteSetsFilterList <a name="DataOciLoadBalancerPathRouteSetsFilterList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerPathRouteSetsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.get"></a>

```csharp
private DataOciLoadBalancerPathRouteSetsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciLoadBalancerPathRouteSetsFilterOutputReference <a name="DataOciLoadBalancerPathRouteSetsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerPathRouteSetsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciLoadBalancerPathRouteSetsPathRouteSetsList <a name="DataOciLoadBalancerPathRouteSetsPathRouteSetsList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerPathRouteSetsPathRouteSetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList.get"></a>

```csharp
private DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference <a name="DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.property.loadBalancerId">LoadBalancerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.property.pathRoutes">PathRoutes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList">DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSets">DataOciLoadBalancerPathRouteSetsPathRouteSets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LoadBalancerId`<sup>Required</sup> <a name="LoadBalancerId" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.property.loadBalancerId"></a>

```csharp
public string LoadBalancerId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PathRoutes`<sup>Required</sup> <a name="PathRoutes" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.property.pathRoutes"></a>

```csharp
public DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList PathRoutes { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList">DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsOutputReference.property.internalValue"></a>

```csharp
public DataOciLoadBalancerPathRouteSetsPathRouteSets InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSets">DataOciLoadBalancerPathRouteSetsPathRouteSets</a>

---


### DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList <a name="DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList.get"></a>

```csharp
private DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference <a name="DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.property.backendSetName">BackendSetName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.property.pathMatchType">PathMatchType</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList">DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutes">DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BackendSetName`<sup>Required</sup> <a name="BackendSetName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.property.backendSetName"></a>

```csharp
public string BackendSetName { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `PathMatchType`<sup>Required</sup> <a name="PathMatchType" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.property.pathMatchType"></a>

```csharp
public DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList PathMatchType { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList">DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesOutputReference.property.internalValue"></a>

```csharp
public DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutes InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutes">DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutes</a>

---


### DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList <a name="DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList.get"></a>

```csharp
private DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference <a name="DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.property.matchType">MatchType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchType">DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MatchType`<sup>Required</sup> <a name="MatchType" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.property.matchType"></a>

```csharp
public string MatchType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchTypeOutputReference.property.internalValue"></a>

```csharp
public DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchType InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLoadBalancerPathRouteSets.DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchType">DataOciLoadBalancerPathRouteSetsPathRouteSetsPathRoutesPathMatchType</a>

---



