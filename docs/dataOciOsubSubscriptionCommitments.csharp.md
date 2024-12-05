# `dataOciOsubSubscriptionCommitments` Submodule <a name="`dataOciOsubSubscriptionCommitments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsubSubscriptionCommitments <a name="DataOciOsubSubscriptionCommitments" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitments oci_osub_subscription_commitments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubSubscriptionCommitments(Construct Scope, string Id, DataOciOsubSubscriptionCommitmentsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig">DataOciOsubSubscriptionCommitmentsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig">DataOciOsubSubscriptionCommitmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.resetXOneGatewaySubscriptionId">ResetXOneGatewaySubscriptionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.resetXOneOriginRegion">ResetXOneOriginRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetXOneGatewaySubscriptionId` <a name="ResetXOneGatewaySubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.resetXOneGatewaySubscriptionId"></a>

```csharp
private void ResetXOneGatewaySubscriptionId()
```

##### `ResetXOneOriginRegion` <a name="ResetXOneOriginRegion" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.resetXOneOriginRegion"></a>

```csharp
private void ResetXOneOriginRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOsubSubscriptionCommitments resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsubSubscriptionCommitments.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsubSubscriptionCommitments.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsubSubscriptionCommitments.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOsubSubscriptionCommitments.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciOsubSubscriptionCommitments resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOsubSubscriptionCommitments to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOsubSubscriptionCommitments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitments#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsubSubscriptionCommitments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.commitments">Commitments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList">DataOciOsubSubscriptionCommitmentsCommitmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList">DataOciOsubSubscriptionCommitmentsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.subscribedServiceIdInput">SubscribedServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.xOneGatewaySubscriptionIdInput">XOneGatewaySubscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.xOneOriginRegionInput">XOneOriginRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.subscribedServiceId">SubscribedServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.xOneGatewaySubscriptionId">XOneGatewaySubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.xOneOriginRegion">XOneOriginRegion</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Commitments`<sup>Required</sup> <a name="Commitments" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.commitments"></a>

```csharp
public DataOciOsubSubscriptionCommitmentsCommitmentsList Commitments { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList">DataOciOsubSubscriptionCommitmentsCommitmentsList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.filter"></a>

```csharp
public DataOciOsubSubscriptionCommitmentsFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList">DataOciOsubSubscriptionCommitmentsFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `SubscribedServiceIdInput`<sup>Optional</sup> <a name="SubscribedServiceIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.subscribedServiceIdInput"></a>

```csharp
public string SubscribedServiceIdInput { get; }
```

- *Type:* string

---

##### `XOneGatewaySubscriptionIdInput`<sup>Optional</sup> <a name="XOneGatewaySubscriptionIdInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.xOneGatewaySubscriptionIdInput"></a>

```csharp
public string XOneGatewaySubscriptionIdInput { get; }
```

- *Type:* string

---

##### `XOneOriginRegionInput`<sup>Optional</sup> <a name="XOneOriginRegionInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.xOneOriginRegionInput"></a>

```csharp
public string XOneOriginRegionInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `SubscribedServiceId`<sup>Required</sup> <a name="SubscribedServiceId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.subscribedServiceId"></a>

```csharp
public string SubscribedServiceId { get; }
```

- *Type:* string

---

##### `XOneGatewaySubscriptionId`<sup>Required</sup> <a name="XOneGatewaySubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.xOneGatewaySubscriptionId"></a>

```csharp
public string XOneGatewaySubscriptionId { get; }
```

- *Type:* string

---

##### `XOneOriginRegion`<sup>Required</sup> <a name="XOneOriginRegion" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.xOneOriginRegion"></a>

```csharp
public string XOneOriginRegion { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitments.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsubSubscriptionCommitmentsCommitments <a name="DataOciOsubSubscriptionCommitmentsCommitments" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitments.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubSubscriptionCommitmentsCommitments {

};
```


### DataOciOsubSubscriptionCommitmentsConfig <a name="DataOciOsubSubscriptionCommitmentsConfig" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubSubscriptionCommitmentsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string SubscribedServiceId,
    object Filter = null,
    string Id = null,
    string XOneGatewaySubscriptionId = null,
    string XOneOriginRegion = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitments#compartment_id DataOciOsubSubscriptionCommitments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.subscribedServiceId">SubscribedServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitments#subscribed_service_id DataOciOsubSubscriptionCommitments#subscribed_service_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitments#id DataOciOsubSubscriptionCommitments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.xOneGatewaySubscriptionId">XOneGatewaySubscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitments#x_one_gateway_subscription_id DataOciOsubSubscriptionCommitments#x_one_gateway_subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.xOneOriginRegion">XOneOriginRegion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitments#x_one_origin_region DataOciOsubSubscriptionCommitments#x_one_origin_region}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitments#compartment_id DataOciOsubSubscriptionCommitments#compartment_id}.

---

##### `SubscribedServiceId`<sup>Required</sup> <a name="SubscribedServiceId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.subscribedServiceId"></a>

```csharp
public string SubscribedServiceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitments#subscribed_service_id DataOciOsubSubscriptionCommitments#subscribed_service_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitments#filter DataOciOsubSubscriptionCommitments#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitments#id DataOciOsubSubscriptionCommitments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `XOneGatewaySubscriptionId`<sup>Optional</sup> <a name="XOneGatewaySubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.xOneGatewaySubscriptionId"></a>

```csharp
public string XOneGatewaySubscriptionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitments#x_one_gateway_subscription_id DataOciOsubSubscriptionCommitments#x_one_gateway_subscription_id}.

---

##### `XOneOriginRegion`<sup>Optional</sup> <a name="XOneOriginRegion" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsConfig.property.xOneOriginRegion"></a>

```csharp
public string XOneOriginRegion { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitments#x_one_origin_region DataOciOsubSubscriptionCommitments#x_one_origin_region}.

---

### DataOciOsubSubscriptionCommitmentsFilter <a name="DataOciOsubSubscriptionCommitmentsFilter" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubSubscriptionCommitmentsFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitments#name DataOciOsubSubscriptionCommitments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitments#values DataOciOsubSubscriptionCommitments#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitments#regex DataOciOsubSubscriptionCommitments#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitments#name DataOciOsubSubscriptionCommitments#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitments#values DataOciOsubSubscriptionCommitments#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitments#regex DataOciOsubSubscriptionCommitments#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOsubSubscriptionCommitmentsCommitmentsList <a name="DataOciOsubSubscriptionCommitmentsCommitmentsList" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubSubscriptionCommitmentsCommitmentsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList.get"></a>

```csharp
private DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference <a name="DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.property.availableAmount">AvailableAmount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.property.fundedAllocationValue">FundedAllocationValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.property.quantity">Quantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.property.timeEnd">TimeEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.property.timeStart">TimeStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.property.usedAmount">UsedAmount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitments">DataOciOsubSubscriptionCommitmentsCommitments</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailableAmount`<sup>Required</sup> <a name="AvailableAmount" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.property.availableAmount"></a>

```csharp
public string AvailableAmount { get; }
```

- *Type:* string

---

##### `FundedAllocationValue`<sup>Required</sup> <a name="FundedAllocationValue" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.property.fundedAllocationValue"></a>

```csharp
public string FundedAllocationValue { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Quantity`<sup>Required</sup> <a name="Quantity" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.property.quantity"></a>

```csharp
public string Quantity { get; }
```

- *Type:* string

---

##### `TimeEnd`<sup>Required</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.property.timeEnd"></a>

```csharp
public string TimeEnd { get; }
```

- *Type:* string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.property.timeStart"></a>

```csharp
public string TimeStart { get; }
```

- *Type:* string

---

##### `UsedAmount`<sup>Required</sup> <a name="UsedAmount" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.property.usedAmount"></a>

```csharp
public string UsedAmount { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitmentsOutputReference.property.internalValue"></a>

```csharp
public DataOciOsubSubscriptionCommitmentsCommitments InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsCommitments">DataOciOsubSubscriptionCommitmentsCommitments</a>

---


### DataOciOsubSubscriptionCommitmentsFilterList <a name="DataOciOsubSubscriptionCommitmentsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubSubscriptionCommitmentsFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.get"></a>

```csharp
private DataOciOsubSubscriptionCommitmentsFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOsubSubscriptionCommitmentsFilterOutputReference <a name="DataOciOsubSubscriptionCommitmentsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOsubSubscriptionCommitmentsFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitments.DataOciOsubSubscriptionCommitmentsFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



