# `dataOciCoreIpInventorySubnet` Submodule <a name="`dataOciCoreIpInventorySubnet` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreIpInventorySubnet <a name="DataOciCoreIpInventorySubnet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_subnet oci_core_ip_inventory_subnet}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpInventorySubnet(Construct Scope, string Id, DataOciCoreIpInventorySubnetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetConfig">DataOciCoreIpInventorySubnetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetConfig">DataOciCoreIpInventorySubnetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreIpInventorySubnet resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreIpInventorySubnet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreIpInventorySubnet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreIpInventorySubnet.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreIpInventorySubnet.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciCoreIpInventorySubnet resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreIpInventorySubnet to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreIpInventorySubnet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_subnet#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreIpInventorySubnet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.ipInventorySubnetCount">IpInventorySubnetCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.ipInventorySubnetResourceSummary">IpInventorySubnetResourceSummary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList">DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.lastUpdatedTimestamp">LastUpdatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.subnetIdInput">SubnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.subnetId">SubnetId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `IpInventorySubnetCount`<sup>Required</sup> <a name="IpInventorySubnetCount" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.ipInventorySubnetCount"></a>

```csharp
public double IpInventorySubnetCount { get; }
```

- *Type:* double

---

##### `IpInventorySubnetResourceSummary`<sup>Required</sup> <a name="IpInventorySubnetResourceSummary" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.ipInventorySubnetResourceSummary"></a>

```csharp
public DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList IpInventorySubnetResourceSummary { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList">DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList</a>

---

##### `LastUpdatedTimestamp`<sup>Required</sup> <a name="LastUpdatedTimestamp" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.lastUpdatedTimestamp"></a>

```csharp
public string LastUpdatedTimestamp { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.subnetIdInput"></a>

```csharp
public string SubnetIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.subnetId"></a>

```csharp
public string SubnetId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreIpInventorySubnetConfig <a name="DataOciCoreIpInventorySubnetConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpInventorySubnetConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string SubnetId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetConfig.property.subnetId">SubnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_subnet#subnet_id DataOciCoreIpInventorySubnet#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_subnet#id DataOciCoreIpInventorySubnet#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetConfig.property.subnetId"></a>

```csharp
public string SubnetId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_subnet#subnet_id DataOciCoreIpInventorySubnet#subnet_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_ip_inventory_subnet#id DataOciCoreIpInventorySubnet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummary <a name="DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummary" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummary.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummary {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList <a name="DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList.get"></a>

```csharp
private DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference <a name="DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.addressType">AddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.assignedResourceName">AssignedResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.assignedResourceType">AssignedResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.assignedTime">AssignedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.associatedPublicIp">AssociatedPublicIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.associatedPublicIpPool">AssociatedPublicIpPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.dnsHostName">DnsHostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.ipAddressLifetime">IpAddressLifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.ipId">IpId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.parentCidr">ParentCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.publicIpLifetime">PublicIpLifetime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummary">DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressType`<sup>Required</sup> <a name="AddressType" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.addressType"></a>

```csharp
public string AddressType { get; }
```

- *Type:* string

---

##### `AssignedResourceName`<sup>Required</sup> <a name="AssignedResourceName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.assignedResourceName"></a>

```csharp
public string AssignedResourceName { get; }
```

- *Type:* string

---

##### `AssignedResourceType`<sup>Required</sup> <a name="AssignedResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.assignedResourceType"></a>

```csharp
public string AssignedResourceType { get; }
```

- *Type:* string

---

##### `AssignedTime`<sup>Required</sup> <a name="AssignedTime" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.assignedTime"></a>

```csharp
public string AssignedTime { get; }
```

- *Type:* string

---

##### `AssociatedPublicIp`<sup>Required</sup> <a name="AssociatedPublicIp" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.associatedPublicIp"></a>

```csharp
public string AssociatedPublicIp { get; }
```

- *Type:* string

---

##### `AssociatedPublicIpPool`<sup>Required</sup> <a name="AssociatedPublicIpPool" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.associatedPublicIpPool"></a>

```csharp
public string AssociatedPublicIpPool { get; }
```

- *Type:* string

---

##### `DnsHostName`<sup>Required</sup> <a name="DnsHostName" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.dnsHostName"></a>

```csharp
public string DnsHostName { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `IpAddressLifetime`<sup>Required</sup> <a name="IpAddressLifetime" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.ipAddressLifetime"></a>

```csharp
public string IpAddressLifetime { get; }
```

- *Type:* string

---

##### `IpId`<sup>Required</sup> <a name="IpId" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.ipId"></a>

```csharp
public string IpId { get; }
```

- *Type:* string

---

##### `ParentCidr`<sup>Required</sup> <a name="ParentCidr" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.parentCidr"></a>

```csharp
public string ParentCidr { get; }
```

- *Type:* string

---

##### `PublicIpLifetime`<sup>Required</sup> <a name="PublicIpLifetime" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.publicIpLifetime"></a>

```csharp
public string PublicIpLifetime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummaryOutputReference.property.internalValue"></a>

```csharp
public DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummary InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreIpInventorySubnet.DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummary">DataOciCoreIpInventorySubnetIpInventorySubnetResourceSummary</a>

---



