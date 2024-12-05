# `dataOciOnesubscriptionSubscribedServices` Submodule <a name="`dataOciOnesubscriptionSubscribedServices` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOnesubscriptionSubscribedServices <a name="DataOciOnesubscriptionSubscribedServices" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services oci_onesubscription_subscribed_services}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServices(Construct Scope, string Id, DataOciOnesubscriptionSubscribedServicesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig">DataOciOnesubscriptionSubscribedServicesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig">DataOciOnesubscriptionSubscribedServicesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.resetOrderLineId">ResetOrderLineId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.resetStatus">ResetStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.putFilter"></a>

```csharp
private void PutFilter(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.putFilter.parameter.value"></a>

- *Type:* object

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetOrderLineId` <a name="ResetOrderLineId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.resetOrderLineId"></a>

```csharp
private void ResetOrderLineId()
```

##### `ResetStatus` <a name="ResetStatus" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.resetStatus"></a>

```csharp
private void ResetStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOnesubscriptionSubscribedServices resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOnesubscriptionSubscribedServices.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOnesubscriptionSubscribedServices.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOnesubscriptionSubscribedServices.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciOnesubscriptionSubscribedServices.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciOnesubscriptionSubscribedServices resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciOnesubscriptionSubscribedServices to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciOnesubscriptionSubscribedServices that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOnesubscriptionSubscribedServices to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList">DataOciOnesubscriptionSubscribedServicesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.subscribedServices">SubscribedServices</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.filterInput">FilterInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.orderLineIdInput">OrderLineIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.orderLineId">OrderLineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.filter"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesFilterList Filter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList">DataOciOnesubscriptionSubscribedServicesFilterList</a>

---

##### `SubscribedServices`<sup>Required</sup> <a name="SubscribedServices" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.subscribedServices"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServicesList SubscribedServices { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.compartmentIdInput"></a>

```csharp
public string CompartmentIdInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.filterInput"></a>

```csharp
public object FilterInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OrderLineIdInput`<sup>Optional</sup> <a name="OrderLineIdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.orderLineIdInput"></a>

```csharp
public string OrderLineIdInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.subscriptionIdInput"></a>

```csharp
public string SubscriptionIdInput { get; }
```

- *Type:* string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `OrderLineId`<sup>Required</sup> <a name="OrderLineId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.orderLineId"></a>

```csharp
public string OrderLineId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServices.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOnesubscriptionSubscribedServicesConfig <a name="DataOciOnesubscriptionSubscribedServicesConfig" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CompartmentId,
    string SubscriptionId,
    object Filter = null,
    string Id = null,
    string OrderLineId = null,
    string Status = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.compartmentId">CompartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#compartment_id DataOciOnesubscriptionSubscribedServices#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#subscription_id DataOciOnesubscriptionSubscribedServices#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.filter">Filter</a></code> | <code>object</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#id DataOciOnesubscriptionSubscribedServices#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.orderLineId">OrderLineId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#order_line_id DataOciOnesubscriptionSubscribedServices#order_line_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#status DataOciOnesubscriptionSubscribedServices#status}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.compartmentId"></a>

```csharp
public string CompartmentId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#compartment_id DataOciOnesubscriptionSubscribedServices#compartment_id}.

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#subscription_id DataOciOnesubscriptionSubscribedServices#subscription_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.filter"></a>

```csharp
public object Filter { get; set; }
```

- *Type:* object

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#filter DataOciOnesubscriptionSubscribedServices#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#id DataOciOnesubscriptionSubscribedServices#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OrderLineId`<sup>Optional</sup> <a name="OrderLineId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.orderLineId"></a>

```csharp
public string OrderLineId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#order_line_id DataOciOnesubscriptionSubscribedServices#order_line_id}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#status DataOciOnesubscriptionSubscribedServices#status}.

---

### DataOciOnesubscriptionSubscribedServicesFilter <a name="DataOciOnesubscriptionSubscribedServicesFilter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesFilter {
    string Name,
    string[] Values,
    object Regex = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#name DataOciOnesubscriptionSubscribedServices#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter.property.values">Values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#values DataOciOnesubscriptionSubscribedServices#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter.property.regex">Regex</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#regex DataOciOnesubscriptionSubscribedServices#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#name DataOciOnesubscriptionSubscribedServices#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter.property.values"></a>

```csharp
public string[] Values { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#values DataOciOnesubscriptionSubscribedServices#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilter.property.regex"></a>

```csharp
public object Regex { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/onesubscription_subscribed_services#regex DataOciOnesubscriptionSubscribedServices#regex}.

---

### DataOciOnesubscriptionSubscribedServicesSubscribedServices <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServices" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServices"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServices.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServices {

};
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddress <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddress" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddress {

};
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocation <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocation" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocation {

};
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContact <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContact"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContact.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContact {

};
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomer <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomer"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomer {

};
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServices <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServices" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServices"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServices.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServices {

};
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddress <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddress" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddress {

};
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocation <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocation" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocation {

};
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContact <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContact"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContact.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContact {

};
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomer <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomer"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomer {

};
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTerm <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTerm" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTerm"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTerm.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTerm {

};
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesProduct <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProduct.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesProduct {

};
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCards <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCards" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCards"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCards.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCards {

};
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrency <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrency" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrency"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrency.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrency {

};
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProduct <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProduct" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProduct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProduct.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProduct {

};
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiers <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiers"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiers.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiers {

};
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddress <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddress" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddress {

};
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocation <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocation" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocation {

};
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContact <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContact"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContact.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContact {

};
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomer <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomer"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomer {

};
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddress <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddress" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddress.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddress {

};
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocation <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocation" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocation"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocation {

};
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContact <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContact"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContact.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContact {

};
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomer <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomer"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomer {

};
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContact <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContact"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContact.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContact {

};
```


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomer <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomer"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomer {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOnesubscriptionSubscribedServicesFilterList <a name="DataOciOnesubscriptionSubscribedServicesFilterList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.get"></a>

```csharp
private DataOciOnesubscriptionSubscribedServicesFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOnesubscriptionSubscribedServicesFilterOutputReference <a name="DataOciOnesubscriptionSubscribedServicesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.resetRegex"></a>

```csharp
private void ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.regex">Regex</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.values">Values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.regexInput"></a>

```csharp
public object RegexInput { get; }
```

- *Type:* object

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.valuesInput"></a>

```csharp
public string[] ValuesInput { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.regex"></a>

```csharp
public object Regex { get; }
```

- *Type:* object

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.values"></a>

```csharp
public string[] Values { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesFilterOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.get"></a>

```csharp
private DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.get"></a>

```csharp
private DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.address1">Address1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.address2">Address2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.city">City</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.country">Country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.postalCode">PostalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.tcaLocationId">TcaLocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocation">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Address1`<sup>Required</sup> <a name="Address1" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.address1"></a>

```csharp
public string Address1 { get; }
```

- *Type:* string

---

##### `Address2`<sup>Required</sup> <a name="Address2" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.address2"></a>

```csharp
public string Address2 { get; }
```

- *Type:* string

---

##### `City`<sup>Required</sup> <a name="City" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.city"></a>

```csharp
public string City { get; }
```

- *Type:* string

---

##### `Country`<sup>Required</sup> <a name="Country" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.country"></a>

```csharp
public string Country { get; }
```

- *Type:* string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.postalCode"></a>

```csharp
public string PostalCode { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `TcaLocationId`<sup>Required</sup> <a name="TcaLocationId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.tcaLocationId"></a>

```csharp
public string TcaLocationId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationOutputReference.property.internalValue"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocation InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocation">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocation</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.billSiteUseId">BillSiteUseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.isBillTo">IsBillTo</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.isShipTo">IsShipTo</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.location">Location</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.phone">Phone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.service2SiteUseId">Service2SiteUseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.tcaCustAcctSiteId">TcaCustAcctSiteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.tcaPartySiteNumber">TcaPartySiteNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddress">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BillSiteUseId`<sup>Required</sup> <a name="BillSiteUseId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.billSiteUseId"></a>

```csharp
public string BillSiteUseId { get; }
```

- *Type:* string

---

##### `IsBillTo`<sup>Required</sup> <a name="IsBillTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.isBillTo"></a>

```csharp
public IResolvable IsBillTo { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsShipTo`<sup>Required</sup> <a name="IsShipTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.isShipTo"></a>

```csharp
public IResolvable IsShipTo { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.location"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList Location { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressLocationList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Phone`<sup>Required</sup> <a name="Phone" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.phone"></a>

```csharp
public string Phone { get; }
```

- *Type:* string

---

##### `Service2SiteUseId`<sup>Required</sup> <a name="Service2SiteUseId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.service2SiteUseId"></a>

```csharp
public string Service2SiteUseId { get; }
```

- *Type:* string

---

##### `TcaCustAcctSiteId`<sup>Required</sup> <a name="TcaCustAcctSiteId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.tcaCustAcctSiteId"></a>

```csharp
public string TcaCustAcctSiteId { get; }
```

- *Type:* string

---

##### `TcaPartySiteNumber`<sup>Required</sup> <a name="TcaPartySiteNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.tcaPartySiteNumber"></a>

```csharp
public string TcaPartySiteNumber { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressOutputReference.property.internalValue"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddress InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddress">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddress</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.get"></a>

```csharp
private DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.firstName">FirstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.lastName">LastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.tcaContactId">TcaContactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.tcaCustAccntSiteId">TcaCustAccntSiteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.tcaPartyId">TcaPartyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContact">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContact</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.firstName"></a>

```csharp
public string FirstName { get; }
```

- *Type:* string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.lastName"></a>

```csharp
public string LastName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TcaContactId`<sup>Required</sup> <a name="TcaContactId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.tcaContactId"></a>

```csharp
public string TcaContactId { get; }
```

- *Type:* string

---

##### `TcaCustAccntSiteId`<sup>Required</sup> <a name="TcaCustAccntSiteId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.tcaCustAccntSiteId"></a>

```csharp
public string TcaCustAccntSiteId { get; }
```

- *Type:* string

---

##### `TcaPartyId`<sup>Required</sup> <a name="TcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.tcaPartyId"></a>

```csharp
public string TcaPartyId { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactOutputReference.property.internalValue"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContact InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContact">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContact</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.get"></a>

```csharp
private DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.customerChainType">CustomerChainType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.isChainCustomer">IsChainCustomer</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.isPublicSector">IsPublicSector</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.namePhonetic">NamePhonetic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.tcaCustAccountNumber">TcaCustAccountNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.tcaCustomerAccountId">TcaCustomerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.tcaPartyId">TcaPartyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.tcaPartyNumber">TcaPartyNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomer">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomerChainType`<sup>Required</sup> <a name="CustomerChainType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.customerChainType"></a>

```csharp
public string CustomerChainType { get; }
```

- *Type:* string

---

##### `IsChainCustomer`<sup>Required</sup> <a name="IsChainCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.isChainCustomer"></a>

```csharp
public IResolvable IsChainCustomer { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsPublicSector`<sup>Required</sup> <a name="IsPublicSector" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.isPublicSector"></a>

```csharp
public IResolvable IsPublicSector { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamePhonetic`<sup>Required</sup> <a name="NamePhonetic" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.namePhonetic"></a>

```csharp
public string NamePhonetic { get; }
```

- *Type:* string

---

##### `TcaCustAccountNumber`<sup>Required</sup> <a name="TcaCustAccountNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.tcaCustAccountNumber"></a>

```csharp
public string TcaCustAccountNumber { get; }
```

- *Type:* string

---

##### `TcaCustomerAccountId`<sup>Required</sup> <a name="TcaCustomerAccountId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.tcaCustomerAccountId"></a>

```csharp
public string TcaCustomerAccountId { get; }
```

- *Type:* string

---

##### `TcaPartyId`<sup>Required</sup> <a name="TcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.tcaPartyId"></a>

```csharp
public string TcaPartyId { get; }
```

- *Type:* string

---

##### `TcaPartyNumber`<sup>Required</sup> <a name="TcaPartyNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.tcaPartyNumber"></a>

```csharp
public string TcaPartyNumber { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerOutputReference.property.internalValue"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomer InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomer">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomer</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.get"></a>

```csharp
private DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.availableAmount">AvailableAmount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.fundedAllocationValue">FundedAllocationValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.lineNetAmount">LineNetAmount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.quantity">Quantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.timeEnd">TimeEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.timeStart">TimeStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServices">DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServices</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AvailableAmount`<sup>Required</sup> <a name="AvailableAmount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.availableAmount"></a>

```csharp
public string AvailableAmount { get; }
```

- *Type:* string

---

##### `FundedAllocationValue`<sup>Required</sup> <a name="FundedAllocationValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.fundedAllocationValue"></a>

```csharp
public string FundedAllocationValue { get; }
```

- *Type:* string

---

##### `LineNetAmount`<sup>Required</sup> <a name="LineNetAmount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.lineNetAmount"></a>

```csharp
public string LineNetAmount { get; }
```

- *Type:* string

---

##### `Quantity`<sup>Required</sup> <a name="Quantity" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.quantity"></a>

```csharp
public string Quantity { get; }
```

- *Type:* string

---

##### `TimeEnd`<sup>Required</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.timeEnd"></a>

```csharp
public string TimeEnd { get; }
```

- *Type:* string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.timeStart"></a>

```csharp
public string TimeStart { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesOutputReference.property.internalValue"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServices InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServices">DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServices</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.get"></a>

```csharp
private DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.get"></a>

```csharp
private DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.address1">Address1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.address2">Address2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.city">City</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.country">Country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.postalCode">PostalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.tcaLocationId">TcaLocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocation">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Address1`<sup>Required</sup> <a name="Address1" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.address1"></a>

```csharp
public string Address1 { get; }
```

- *Type:* string

---

##### `Address2`<sup>Required</sup> <a name="Address2" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.address2"></a>

```csharp
public string Address2 { get; }
```

- *Type:* string

---

##### `City`<sup>Required</sup> <a name="City" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.city"></a>

```csharp
public string City { get; }
```

- *Type:* string

---

##### `Country`<sup>Required</sup> <a name="Country" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.country"></a>

```csharp
public string Country { get; }
```

- *Type:* string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.postalCode"></a>

```csharp
public string PostalCode { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `TcaLocationId`<sup>Required</sup> <a name="TcaLocationId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.tcaLocationId"></a>

```csharp
public string TcaLocationId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationOutputReference.property.internalValue"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocation InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocation">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocation</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.billSiteUseId">BillSiteUseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.isBillTo">IsBillTo</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.isShipTo">IsShipTo</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.location">Location</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.phone">Phone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.service2SiteUseId">Service2SiteUseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.tcaCustAcctSiteId">TcaCustAcctSiteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.tcaPartySiteNumber">TcaPartySiteNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddress">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BillSiteUseId`<sup>Required</sup> <a name="BillSiteUseId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.billSiteUseId"></a>

```csharp
public string BillSiteUseId { get; }
```

- *Type:* string

---

##### `IsBillTo`<sup>Required</sup> <a name="IsBillTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.isBillTo"></a>

```csharp
public IResolvable IsBillTo { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsShipTo`<sup>Required</sup> <a name="IsShipTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.isShipTo"></a>

```csharp
public IResolvable IsShipTo { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.location"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList Location { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressLocationList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Phone`<sup>Required</sup> <a name="Phone" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.phone"></a>

```csharp
public string Phone { get; }
```

- *Type:* string

---

##### `Service2SiteUseId`<sup>Required</sup> <a name="Service2SiteUseId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.service2SiteUseId"></a>

```csharp
public string Service2SiteUseId { get; }
```

- *Type:* string

---

##### `TcaCustAcctSiteId`<sup>Required</sup> <a name="TcaCustAcctSiteId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.tcaCustAcctSiteId"></a>

```csharp
public string TcaCustAcctSiteId { get; }
```

- *Type:* string

---

##### `TcaPartySiteNumber`<sup>Required</sup> <a name="TcaPartySiteNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.tcaPartySiteNumber"></a>

```csharp
public string TcaPartySiteNumber { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressOutputReference.property.internalValue"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddress InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddress">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddress</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.get"></a>

```csharp
private DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.firstName">FirstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.lastName">LastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.tcaContactId">TcaContactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.tcaCustAccntSiteId">TcaCustAccntSiteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.tcaPartyId">TcaPartyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContact">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContact</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.firstName"></a>

```csharp
public string FirstName { get; }
```

- *Type:* string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.lastName"></a>

```csharp
public string LastName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TcaContactId`<sup>Required</sup> <a name="TcaContactId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.tcaContactId"></a>

```csharp
public string TcaContactId { get; }
```

- *Type:* string

---

##### `TcaCustAccntSiteId`<sup>Required</sup> <a name="TcaCustAccntSiteId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.tcaCustAccntSiteId"></a>

```csharp
public string TcaCustAccntSiteId { get; }
```

- *Type:* string

---

##### `TcaPartyId`<sup>Required</sup> <a name="TcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.tcaPartyId"></a>

```csharp
public string TcaPartyId { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactOutputReference.property.internalValue"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContact InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContact">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContact</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.get"></a>

```csharp
private DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.customerChainType">CustomerChainType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.isChainCustomer">IsChainCustomer</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.isPublicSector">IsPublicSector</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.namePhonetic">NamePhonetic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.tcaCustAccountNumber">TcaCustAccountNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.tcaCustomerAccountId">TcaCustomerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.tcaPartyId">TcaPartyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.tcaPartyNumber">TcaPartyNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomer">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomerChainType`<sup>Required</sup> <a name="CustomerChainType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.customerChainType"></a>

```csharp
public string CustomerChainType { get; }
```

- *Type:* string

---

##### `IsChainCustomer`<sup>Required</sup> <a name="IsChainCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.isChainCustomer"></a>

```csharp
public IResolvable IsChainCustomer { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsPublicSector`<sup>Required</sup> <a name="IsPublicSector" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.isPublicSector"></a>

```csharp
public IResolvable IsPublicSector { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamePhonetic`<sup>Required</sup> <a name="NamePhonetic" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.namePhonetic"></a>

```csharp
public string NamePhonetic { get; }
```

- *Type:* string

---

##### `TcaCustAccountNumber`<sup>Required</sup> <a name="TcaCustAccountNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.tcaCustAccountNumber"></a>

```csharp
public string TcaCustAccountNumber { get; }
```

- *Type:* string

---

##### `TcaCustomerAccountId`<sup>Required</sup> <a name="TcaCustomerAccountId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.tcaCustomerAccountId"></a>

```csharp
public string TcaCustomerAccountId { get; }
```

- *Type:* string

---

##### `TcaPartyId`<sup>Required</sup> <a name="TcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.tcaPartyId"></a>

```csharp
public string TcaPartyId { get; }
```

- *Type:* string

---

##### `TcaPartyNumber`<sup>Required</sup> <a name="TcaPartyNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.tcaPartyNumber"></a>

```csharp
public string TcaPartyNumber { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerOutputReference.property.internalValue"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomer InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomer">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomer</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.get"></a>

```csharp
private DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.adminEmail">AdminEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.agreementId">AgreementId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.agreementName">AgreementName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.agreementType">AgreementType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.availableAmount">AvailableAmount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.billingFrequency">BillingFrequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.billToAddress">BillToAddress</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.billToContact">BillToContact</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.billToCustomer">BillToCustomer</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.bookingOptyNumber">BookingOptyNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.buyerEmail">BuyerEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.commitmentScheduleId">CommitmentScheduleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.commitmentServices">CommitmentServices</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.creditPercentage">CreditPercentage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.csi">Csi</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.customerTransactionReference">CustomerTransactionReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.dataCenter">DataCenter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.dataCenterRegion">DataCenterRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.eligibleToRenew">EligibleToRenew</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.endUserAddress">EndUserAddress</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.endUserContact">EndUserContact</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.endUserCustomer">EndUserCustomer</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.fulfillmentSet">FulfillmentSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.fundedAllocationValue">FundedAllocationValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isAllowance">IsAllowance</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isCapToPriceList">IsCapToPriceList</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isCreditEnabled">IsCreditEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isHavingUsage">IsHavingUsage</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isIntentToPay">IsIntentToPay</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isPayg">IsPayg</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isSingleRateCard">IsSingleRateCard</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isVariableCommitment">IsVariableCommitment</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.lineNetAmount">LineNetAmount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.majorSet">MajorSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.netUnitPrice">NetUnitPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.operationType">OperationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.orderHeaderId">OrderHeaderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.orderLineId">OrderLineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.orderLineNumber">OrderLineNumber</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.orderNumber">OrderNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.orderType">OrderType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.originalPromoAmount">OriginalPromoAmount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.overageBillTo">OverageBillTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.overageDiscountPercentage">OverageDiscountPercentage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.overagePolicy">OveragePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.partnerCreditAmount">PartnerCreditAmount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.partnerTransactionType">PartnerTransactionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.paygPolicy">PaygPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.paymentMethod">PaymentMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.paymentNumber">PaymentNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.paymentTerm">PaymentTerm</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.pricePeriod">PricePeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.pricingModel">PricingModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.product">Product</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.programType">ProgramType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.promoOrderLineId">PromoOrderLineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.promotionPricingType">PromotionPricingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.promoType">PromoType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.provisioningSource">ProvisioningSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.quantity">Quantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.rateCardDiscountPercentage">RateCardDiscountPercentage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.rateCards">RateCards</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.ratecardType">RatecardType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.renewalOptyId">RenewalOptyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.renewalOptyNumber">RenewalOptyNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.renewalOptyType">RenewalOptyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.renewedSubscribedServiceId">RenewedSubscribedServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.resellerAddress">ResellerAddress</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.resellerContact">ResellerContact</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.resellerCustomer">ResellerCustomer</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.revenueLineId">RevenueLineId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.revenueLineNumber">RevenueLineNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.revisedArrInLc">RevisedArrInLc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.revisedArrInSc">RevisedArrInSc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.salesAccountPartyId">SalesAccountPartyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.salesChannel">SalesChannel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.serialNumber">SerialNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.serviceToAddress">ServiceToAddress</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.serviceToContact">ServiceToContact</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.serviceToCustomer">ServiceToCustomer</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.soldToContact">SoldToContact</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.soldToCustomer">SoldToCustomer</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.startDateType">StartDateType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.subscriptionId">SubscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.subscriptionSource">SubscriptionSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.systemArrInLc">SystemArrInLc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.systemArrInSc">SystemArrInSc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.systemAtrArrInLc">SystemAtrArrInLc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.systemAtrArrInSc">SystemAtrArrInSc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.termValue">TermValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.termValueUom">TermValueUom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeAgreementEnd">TimeAgreementEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeCustomerConfig">TimeCustomerConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeEnd">TimeEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeMajorsetEnd">TimeMajorsetEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeMajorsetStart">TimeMajorsetStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timePaymentExpiry">TimePaymentExpiry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeProvisioned">TimeProvisioned</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeServiceConfigurationEmailSent">TimeServiceConfigurationEmailSent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeStart">TimeStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeWelcomeEmailSent">TimeWelcomeEmailSent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.totalValue">TotalValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.transactionExtensionId">TransactionExtensionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.updatedBy">UpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.usedAmount">UsedAmount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServices">DataOciOnesubscriptionSubscribedServicesSubscribedServices</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AdminEmail`<sup>Required</sup> <a name="AdminEmail" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.adminEmail"></a>

```csharp
public string AdminEmail { get; }
```

- *Type:* string

---

##### `AgreementId`<sup>Required</sup> <a name="AgreementId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.agreementId"></a>

```csharp
public string AgreementId { get; }
```

- *Type:* string

---

##### `AgreementName`<sup>Required</sup> <a name="AgreementName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.agreementName"></a>

```csharp
public string AgreementName { get; }
```

- *Type:* string

---

##### `AgreementType`<sup>Required</sup> <a name="AgreementType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.agreementType"></a>

```csharp
public string AgreementType { get; }
```

- *Type:* string

---

##### `AvailableAmount`<sup>Required</sup> <a name="AvailableAmount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.availableAmount"></a>

```csharp
public string AvailableAmount { get; }
```

- *Type:* string

---

##### `BillingFrequency`<sup>Required</sup> <a name="BillingFrequency" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.billingFrequency"></a>

```csharp
public string BillingFrequency { get; }
```

- *Type:* string

---

##### `BillToAddress`<sup>Required</sup> <a name="BillToAddress" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.billToAddress"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList BillToAddress { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToAddressList</a>

---

##### `BillToContact`<sup>Required</sup> <a name="BillToContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.billToContact"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList BillToContact { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToContactList</a>

---

##### `BillToCustomer`<sup>Required</sup> <a name="BillToCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.billToCustomer"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList BillToCustomer { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesBillToCustomerList</a>

---

##### `BookingOptyNumber`<sup>Required</sup> <a name="BookingOptyNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.bookingOptyNumber"></a>

```csharp
public string BookingOptyNumber { get; }
```

- *Type:* string

---

##### `BuyerEmail`<sup>Required</sup> <a name="BuyerEmail" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.buyerEmail"></a>

```csharp
public string BuyerEmail { get; }
```

- *Type:* string

---

##### `CommitmentScheduleId`<sup>Required</sup> <a name="CommitmentScheduleId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.commitmentScheduleId"></a>

```csharp
public string CommitmentScheduleId { get; }
```

- *Type:* string

---

##### `CommitmentServices`<sup>Required</sup> <a name="CommitmentServices" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.commitmentServices"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList CommitmentServices { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesCommitmentServicesList</a>

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `CreditPercentage`<sup>Required</sup> <a name="CreditPercentage" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.creditPercentage"></a>

```csharp
public string CreditPercentage { get; }
```

- *Type:* string

---

##### `Csi`<sup>Required</sup> <a name="Csi" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.csi"></a>

```csharp
public string Csi { get; }
```

- *Type:* string

---

##### `CustomerTransactionReference`<sup>Required</sup> <a name="CustomerTransactionReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.customerTransactionReference"></a>

```csharp
public string CustomerTransactionReference { get; }
```

- *Type:* string

---

##### `DataCenter`<sup>Required</sup> <a name="DataCenter" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.dataCenter"></a>

```csharp
public string DataCenter { get; }
```

- *Type:* string

---

##### `DataCenterRegion`<sup>Required</sup> <a name="DataCenterRegion" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.dataCenterRegion"></a>

```csharp
public string DataCenterRegion { get; }
```

- *Type:* string

---

##### `EligibleToRenew`<sup>Required</sup> <a name="EligibleToRenew" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.eligibleToRenew"></a>

```csharp
public string EligibleToRenew { get; }
```

- *Type:* string

---

##### `EndUserAddress`<sup>Required</sup> <a name="EndUserAddress" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.endUserAddress"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList EndUserAddress { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserAddressList</a>

---

##### `EndUserContact`<sup>Required</sup> <a name="EndUserContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.endUserContact"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList EndUserContact { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserContactList</a>

---

##### `EndUserCustomer`<sup>Required</sup> <a name="EndUserCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.endUserCustomer"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList EndUserCustomer { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesEndUserCustomerList</a>

---

##### `FulfillmentSet`<sup>Required</sup> <a name="FulfillmentSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.fulfillmentSet"></a>

```csharp
public string FulfillmentSet { get; }
```

- *Type:* string

---

##### `FundedAllocationValue`<sup>Required</sup> <a name="FundedAllocationValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.fundedAllocationValue"></a>

```csharp
public string FundedAllocationValue { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsAllowance`<sup>Required</sup> <a name="IsAllowance" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isAllowance"></a>

```csharp
public IResolvable IsAllowance { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsCapToPriceList`<sup>Required</sup> <a name="IsCapToPriceList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isCapToPriceList"></a>

```csharp
public IResolvable IsCapToPriceList { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsCreditEnabled`<sup>Required</sup> <a name="IsCreditEnabled" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isCreditEnabled"></a>

```csharp
public IResolvable IsCreditEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsHavingUsage`<sup>Required</sup> <a name="IsHavingUsage" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isHavingUsage"></a>

```csharp
public IResolvable IsHavingUsage { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsIntentToPay`<sup>Required</sup> <a name="IsIntentToPay" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isIntentToPay"></a>

```csharp
public IResolvable IsIntentToPay { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsPayg`<sup>Required</sup> <a name="IsPayg" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isPayg"></a>

```csharp
public IResolvable IsPayg { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsSingleRateCard`<sup>Required</sup> <a name="IsSingleRateCard" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isSingleRateCard"></a>

```csharp
public IResolvable IsSingleRateCard { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsVariableCommitment`<sup>Required</sup> <a name="IsVariableCommitment" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.isVariableCommitment"></a>

```csharp
public IResolvable IsVariableCommitment { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `LineNetAmount`<sup>Required</sup> <a name="LineNetAmount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.lineNetAmount"></a>

```csharp
public string LineNetAmount { get; }
```

- *Type:* string

---

##### `MajorSet`<sup>Required</sup> <a name="MajorSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.majorSet"></a>

```csharp
public string MajorSet { get; }
```

- *Type:* string

---

##### `NetUnitPrice`<sup>Required</sup> <a name="NetUnitPrice" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.netUnitPrice"></a>

```csharp
public string NetUnitPrice { get; }
```

- *Type:* string

---

##### `OperationType`<sup>Required</sup> <a name="OperationType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.operationType"></a>

```csharp
public string OperationType { get; }
```

- *Type:* string

---

##### `OrderHeaderId`<sup>Required</sup> <a name="OrderHeaderId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.orderHeaderId"></a>

```csharp
public string OrderHeaderId { get; }
```

- *Type:* string

---

##### `OrderLineId`<sup>Required</sup> <a name="OrderLineId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.orderLineId"></a>

```csharp
public string OrderLineId { get; }
```

- *Type:* string

---

##### `OrderLineNumber`<sup>Required</sup> <a name="OrderLineNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.orderLineNumber"></a>

```csharp
public double OrderLineNumber { get; }
```

- *Type:* double

---

##### `OrderNumber`<sup>Required</sup> <a name="OrderNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.orderNumber"></a>

```csharp
public string OrderNumber { get; }
```

- *Type:* string

---

##### `OrderType`<sup>Required</sup> <a name="OrderType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.orderType"></a>

```csharp
public string OrderType { get; }
```

- *Type:* string

---

##### `OriginalPromoAmount`<sup>Required</sup> <a name="OriginalPromoAmount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.originalPromoAmount"></a>

```csharp
public string OriginalPromoAmount { get; }
```

- *Type:* string

---

##### `OverageBillTo`<sup>Required</sup> <a name="OverageBillTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.overageBillTo"></a>

```csharp
public string OverageBillTo { get; }
```

- *Type:* string

---

##### `OverageDiscountPercentage`<sup>Required</sup> <a name="OverageDiscountPercentage" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.overageDiscountPercentage"></a>

```csharp
public string OverageDiscountPercentage { get; }
```

- *Type:* string

---

##### `OveragePolicy`<sup>Required</sup> <a name="OveragePolicy" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.overagePolicy"></a>

```csharp
public string OveragePolicy { get; }
```

- *Type:* string

---

##### `PartnerCreditAmount`<sup>Required</sup> <a name="PartnerCreditAmount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.partnerCreditAmount"></a>

```csharp
public string PartnerCreditAmount { get; }
```

- *Type:* string

---

##### `PartnerTransactionType`<sup>Required</sup> <a name="PartnerTransactionType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.partnerTransactionType"></a>

```csharp
public string PartnerTransactionType { get; }
```

- *Type:* string

---

##### `PaygPolicy`<sup>Required</sup> <a name="PaygPolicy" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.paygPolicy"></a>

```csharp
public string PaygPolicy { get; }
```

- *Type:* string

---

##### `PaymentMethod`<sup>Required</sup> <a name="PaymentMethod" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.paymentMethod"></a>

```csharp
public string PaymentMethod { get; }
```

- *Type:* string

---

##### `PaymentNumber`<sup>Required</sup> <a name="PaymentNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.paymentNumber"></a>

```csharp
public string PaymentNumber { get; }
```

- *Type:* string

---

##### `PaymentTerm`<sup>Required</sup> <a name="PaymentTerm" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.paymentTerm"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList PaymentTerm { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList</a>

---

##### `PricePeriod`<sup>Required</sup> <a name="PricePeriod" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.pricePeriod"></a>

```csharp
public string PricePeriod { get; }
```

- *Type:* string

---

##### `PricingModel`<sup>Required</sup> <a name="PricingModel" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.pricingModel"></a>

```csharp
public string PricingModel { get; }
```

- *Type:* string

---

##### `Product`<sup>Required</sup> <a name="Product" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.product"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList Product { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList</a>

---

##### `ProgramType`<sup>Required</sup> <a name="ProgramType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.programType"></a>

```csharp
public string ProgramType { get; }
```

- *Type:* string

---

##### `PromoOrderLineId`<sup>Required</sup> <a name="PromoOrderLineId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.promoOrderLineId"></a>

```csharp
public string PromoOrderLineId { get; }
```

- *Type:* string

---

##### `PromotionPricingType`<sup>Required</sup> <a name="PromotionPricingType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.promotionPricingType"></a>

```csharp
public string PromotionPricingType { get; }
```

- *Type:* string

---

##### `PromoType`<sup>Required</sup> <a name="PromoType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.promoType"></a>

```csharp
public string PromoType { get; }
```

- *Type:* string

---

##### `ProvisioningSource`<sup>Required</sup> <a name="ProvisioningSource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.provisioningSource"></a>

```csharp
public string ProvisioningSource { get; }
```

- *Type:* string

---

##### `Quantity`<sup>Required</sup> <a name="Quantity" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.quantity"></a>

```csharp
public string Quantity { get; }
```

- *Type:* string

---

##### `RateCardDiscountPercentage`<sup>Required</sup> <a name="RateCardDiscountPercentage" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.rateCardDiscountPercentage"></a>

```csharp
public string RateCardDiscountPercentage { get; }
```

- *Type:* string

---

##### `RateCards`<sup>Required</sup> <a name="RateCards" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.rateCards"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList RateCards { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList</a>

---

##### `RatecardType`<sup>Required</sup> <a name="RatecardType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.ratecardType"></a>

```csharp
public string RatecardType { get; }
```

- *Type:* string

---

##### `RenewalOptyId`<sup>Required</sup> <a name="RenewalOptyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.renewalOptyId"></a>

```csharp
public string RenewalOptyId { get; }
```

- *Type:* string

---

##### `RenewalOptyNumber`<sup>Required</sup> <a name="RenewalOptyNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.renewalOptyNumber"></a>

```csharp
public string RenewalOptyNumber { get; }
```

- *Type:* string

---

##### `RenewalOptyType`<sup>Required</sup> <a name="RenewalOptyType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.renewalOptyType"></a>

```csharp
public string RenewalOptyType { get; }
```

- *Type:* string

---

##### `RenewedSubscribedServiceId`<sup>Required</sup> <a name="RenewedSubscribedServiceId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.renewedSubscribedServiceId"></a>

```csharp
public string RenewedSubscribedServiceId { get; }
```

- *Type:* string

---

##### `ResellerAddress`<sup>Required</sup> <a name="ResellerAddress" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.resellerAddress"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList ResellerAddress { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList</a>

---

##### `ResellerContact`<sup>Required</sup> <a name="ResellerContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.resellerContact"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList ResellerContact { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList</a>

---

##### `ResellerCustomer`<sup>Required</sup> <a name="ResellerCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.resellerCustomer"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList ResellerCustomer { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList</a>

---

##### `RevenueLineId`<sup>Required</sup> <a name="RevenueLineId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.revenueLineId"></a>

```csharp
public string RevenueLineId { get; }
```

- *Type:* string

---

##### `RevenueLineNumber`<sup>Required</sup> <a name="RevenueLineNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.revenueLineNumber"></a>

```csharp
public string RevenueLineNumber { get; }
```

- *Type:* string

---

##### `RevisedArrInLc`<sup>Required</sup> <a name="RevisedArrInLc" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.revisedArrInLc"></a>

```csharp
public string RevisedArrInLc { get; }
```

- *Type:* string

---

##### `RevisedArrInSc`<sup>Required</sup> <a name="RevisedArrInSc" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.revisedArrInSc"></a>

```csharp
public string RevisedArrInSc { get; }
```

- *Type:* string

---

##### `SalesAccountPartyId`<sup>Required</sup> <a name="SalesAccountPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.salesAccountPartyId"></a>

```csharp
public string SalesAccountPartyId { get; }
```

- *Type:* string

---

##### `SalesChannel`<sup>Required</sup> <a name="SalesChannel" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.salesChannel"></a>

```csharp
public string SalesChannel { get; }
```

- *Type:* string

---

##### `SerialNumber`<sup>Required</sup> <a name="SerialNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.serialNumber"></a>

```csharp
public string SerialNumber { get; }
```

- *Type:* string

---

##### `ServiceToAddress`<sup>Required</sup> <a name="ServiceToAddress" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.serviceToAddress"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList ServiceToAddress { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList</a>

---

##### `ServiceToContact`<sup>Required</sup> <a name="ServiceToContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.serviceToContact"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList ServiceToContact { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList</a>

---

##### `ServiceToCustomer`<sup>Required</sup> <a name="ServiceToCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.serviceToCustomer"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList ServiceToCustomer { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList</a>

---

##### `SoldToContact`<sup>Required</sup> <a name="SoldToContact" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.soldToContact"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList SoldToContact { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList</a>

---

##### `SoldToCustomer`<sup>Required</sup> <a name="SoldToCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.soldToCustomer"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList SoldToCustomer { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList</a>

---

##### `StartDateType`<sup>Required</sup> <a name="StartDateType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.startDateType"></a>

```csharp
public string StartDateType { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.subscriptionId"></a>

```csharp
public string SubscriptionId { get; }
```

- *Type:* string

---

##### `SubscriptionSource`<sup>Required</sup> <a name="SubscriptionSource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.subscriptionSource"></a>

```csharp
public string SubscriptionSource { get; }
```

- *Type:* string

---

##### `SystemArrInLc`<sup>Required</sup> <a name="SystemArrInLc" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.systemArrInLc"></a>

```csharp
public string SystemArrInLc { get; }
```

- *Type:* string

---

##### `SystemArrInSc`<sup>Required</sup> <a name="SystemArrInSc" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.systemArrInSc"></a>

```csharp
public string SystemArrInSc { get; }
```

- *Type:* string

---

##### `SystemAtrArrInLc`<sup>Required</sup> <a name="SystemAtrArrInLc" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.systemAtrArrInLc"></a>

```csharp
public string SystemAtrArrInLc { get; }
```

- *Type:* string

---

##### `SystemAtrArrInSc`<sup>Required</sup> <a name="SystemAtrArrInSc" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.systemAtrArrInSc"></a>

```csharp
public string SystemAtrArrInSc { get; }
```

- *Type:* string

---

##### `TermValue`<sup>Required</sup> <a name="TermValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.termValue"></a>

```csharp
public string TermValue { get; }
```

- *Type:* string

---

##### `TermValueUom`<sup>Required</sup> <a name="TermValueUom" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.termValueUom"></a>

```csharp
public string TermValueUom { get; }
```

- *Type:* string

---

##### `TimeAgreementEnd`<sup>Required</sup> <a name="TimeAgreementEnd" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeAgreementEnd"></a>

```csharp
public string TimeAgreementEnd { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeCustomerConfig`<sup>Required</sup> <a name="TimeCustomerConfig" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeCustomerConfig"></a>

```csharp
public string TimeCustomerConfig { get; }
```

- *Type:* string

---

##### `TimeEnd`<sup>Required</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeEnd"></a>

```csharp
public string TimeEnd { get; }
```

- *Type:* string

---

##### `TimeMajorsetEnd`<sup>Required</sup> <a name="TimeMajorsetEnd" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeMajorsetEnd"></a>

```csharp
public string TimeMajorsetEnd { get; }
```

- *Type:* string

---

##### `TimeMajorsetStart`<sup>Required</sup> <a name="TimeMajorsetStart" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeMajorsetStart"></a>

```csharp
public string TimeMajorsetStart { get; }
```

- *Type:* string

---

##### `TimePaymentExpiry`<sup>Required</sup> <a name="TimePaymentExpiry" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timePaymentExpiry"></a>

```csharp
public string TimePaymentExpiry { get; }
```

- *Type:* string

---

##### `TimeProvisioned`<sup>Required</sup> <a name="TimeProvisioned" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeProvisioned"></a>

```csharp
public string TimeProvisioned { get; }
```

- *Type:* string

---

##### `TimeServiceConfigurationEmailSent`<sup>Required</sup> <a name="TimeServiceConfigurationEmailSent" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeServiceConfigurationEmailSent"></a>

```csharp
public string TimeServiceConfigurationEmailSent { get; }
```

- *Type:* string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeStart"></a>

```csharp
public string TimeStart { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `TimeWelcomeEmailSent`<sup>Required</sup> <a name="TimeWelcomeEmailSent" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.timeWelcomeEmailSent"></a>

```csharp
public string TimeWelcomeEmailSent { get; }
```

- *Type:* string

---

##### `TotalValue`<sup>Required</sup> <a name="TotalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.totalValue"></a>

```csharp
public string TotalValue { get; }
```

- *Type:* string

---

##### `TransactionExtensionId`<sup>Required</sup> <a name="TransactionExtensionId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.transactionExtensionId"></a>

```csharp
public string TransactionExtensionId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.updatedBy"></a>

```csharp
public string UpdatedBy { get; }
```

- *Type:* string

---

##### `UsedAmount`<sup>Required</sup> <a name="UsedAmount" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.usedAmount"></a>

```csharp
public string UsedAmount { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesOutputReference.property.internalValue"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServices InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServices">DataOciOnesubscriptionSubscribedServicesSubscribedServices</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.get"></a>

```csharp
private DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.createdBy">CreatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.isActive">IsActive</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.updatedBy">UpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTerm">DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTerm</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.createdBy"></a>

```csharp
public string CreatedBy { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `IsActive`<sup>Required</sup> <a name="IsActive" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.isActive"></a>

```csharp
public IResolvable IsActive { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.updatedBy"></a>

```csharp
public string UpdatedBy { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTermOutputReference.property.internalValue"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTerm InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTerm">DataOciOnesubscriptionSubscribedServicesSubscribedServicesPaymentTerm</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.get"></a>

```csharp
private DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.billingCategory">BillingCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.partNumber">PartNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.productCategory">ProductCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.ucmRateCardPartType">UcmRateCardPartType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.unitOfMeasure">UnitOfMeasure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProduct">DataOciOnesubscriptionSubscribedServicesSubscribedServicesProduct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BillingCategory`<sup>Required</sup> <a name="BillingCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.billingCategory"></a>

```csharp
public string BillingCategory { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PartNumber`<sup>Required</sup> <a name="PartNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.partNumber"></a>

```csharp
public string PartNumber { get; }
```

- *Type:* string

---

##### `ProductCategory`<sup>Required</sup> <a name="ProductCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.productCategory"></a>

```csharp
public string ProductCategory { get; }
```

- *Type:* string

---

##### `UcmRateCardPartType`<sup>Required</sup> <a name="UcmRateCardPartType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.ucmRateCardPartType"></a>

```csharp
public string UcmRateCardPartType { get; }
```

- *Type:* string

---

##### `UnitOfMeasure`<sup>Required</sup> <a name="UnitOfMeasure" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.unitOfMeasure"></a>

```csharp
public string UnitOfMeasure { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProductOutputReference.property.internalValue"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServicesProduct InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesProduct">DataOciOnesubscriptionSubscribedServicesSubscribedServicesProduct</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.get"></a>

```csharp
private DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.property.isoCode">IsoCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.property.stdPrecision">StdPrecision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrency">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrency</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IsoCode`<sup>Required</sup> <a name="IsoCode" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.property.isoCode"></a>

```csharp
public string IsoCode { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `StdPrecision`<sup>Required</sup> <a name="StdPrecision" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.property.stdPrecision"></a>

```csharp
public string StdPrecision { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyOutputReference.property.internalValue"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrency InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrency">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrency</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.get"></a>

```csharp
private DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.currency">Currency</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.discretionaryDiscountPercentage">DiscretionaryDiscountPercentage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.isTier">IsTier</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.netUnitPrice">NetUnitPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.overagePrice">OveragePrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.product">Product</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.rateCardTiers">RateCardTiers</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.subscribedServiceId">SubscribedServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.timeEnd">TimeEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.timeStart">TimeStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCards">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCards</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Currency`<sup>Required</sup> <a name="Currency" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.currency"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList Currency { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsCurrencyList</a>

---

##### `DiscretionaryDiscountPercentage`<sup>Required</sup> <a name="DiscretionaryDiscountPercentage" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.discretionaryDiscountPercentage"></a>

```csharp
public string DiscretionaryDiscountPercentage { get; }
```

- *Type:* string

---

##### `IsTier`<sup>Required</sup> <a name="IsTier" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.isTier"></a>

```csharp
public IResolvable IsTier { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `NetUnitPrice`<sup>Required</sup> <a name="NetUnitPrice" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.netUnitPrice"></a>

```csharp
public string NetUnitPrice { get; }
```

- *Type:* string

---

##### `OveragePrice`<sup>Required</sup> <a name="OveragePrice" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.overagePrice"></a>

```csharp
public string OveragePrice { get; }
```

- *Type:* string

---

##### `Product`<sup>Required</sup> <a name="Product" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.product"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList Product { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList</a>

---

##### `RateCardTiers`<sup>Required</sup> <a name="RateCardTiers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.rateCardTiers"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList RateCardTiers { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList</a>

---

##### `SubscribedServiceId`<sup>Required</sup> <a name="SubscribedServiceId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.subscribedServiceId"></a>

```csharp
public string SubscribedServiceId { get; }
```

- *Type:* string

---

##### `TimeEnd`<sup>Required</sup> <a name="TimeEnd" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.timeEnd"></a>

```csharp
public string TimeEnd { get; }
```

- *Type:* string

---

##### `TimeStart`<sup>Required</sup> <a name="TimeStart" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.timeStart"></a>

```csharp
public string TimeStart { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsOutputReference.property.internalValue"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCards InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCards">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCards</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.get"></a>

```csharp
private DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.billingCategory">BillingCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.partNumber">PartNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.productCategory">ProductCategory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.ucmRateCardPartType">UcmRateCardPartType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.unitOfMeasure">UnitOfMeasure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProduct">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProduct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BillingCategory`<sup>Required</sup> <a name="BillingCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.billingCategory"></a>

```csharp
public string BillingCategory { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PartNumber`<sup>Required</sup> <a name="PartNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.partNumber"></a>

```csharp
public string PartNumber { get; }
```

- *Type:* string

---

##### `ProductCategory`<sup>Required</sup> <a name="ProductCategory" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.productCategory"></a>

```csharp
public string ProductCategory { get; }
```

- *Type:* string

---

##### `UcmRateCardPartType`<sup>Required</sup> <a name="UcmRateCardPartType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.ucmRateCardPartType"></a>

```csharp
public string UcmRateCardPartType { get; }
```

- *Type:* string

---

##### `UnitOfMeasure`<sup>Required</sup> <a name="UnitOfMeasure" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.unitOfMeasure"></a>

```csharp
public string UnitOfMeasure { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProductOutputReference.property.internalValue"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProduct InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProduct">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsProduct</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.get"></a>

```csharp
private DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.property.netUnitPrice">NetUnitPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.property.overagePrice">OveragePrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.property.upToQuantity">UpToQuantity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiers">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetUnitPrice`<sup>Required</sup> <a name="NetUnitPrice" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.property.netUnitPrice"></a>

```csharp
public string NetUnitPrice { get; }
```

- *Type:* string

---

##### `OveragePrice`<sup>Required</sup> <a name="OveragePrice" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.property.overagePrice"></a>

```csharp
public string OveragePrice { get; }
```

- *Type:* string

---

##### `UpToQuantity`<sup>Required</sup> <a name="UpToQuantity" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.property.upToQuantity"></a>

```csharp
public string UpToQuantity { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiersOutputReference.property.internalValue"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiers InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiers">DataOciOnesubscriptionSubscribedServicesSubscribedServicesRateCardsRateCardTiers</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.get"></a>

```csharp
private DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.get"></a>

```csharp
private DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.address1">Address1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.address2">Address2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.city">City</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.country">Country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.postalCode">PostalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.tcaLocationId">TcaLocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocation">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Address1`<sup>Required</sup> <a name="Address1" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.address1"></a>

```csharp
public string Address1 { get; }
```

- *Type:* string

---

##### `Address2`<sup>Required</sup> <a name="Address2" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.address2"></a>

```csharp
public string Address2 { get; }
```

- *Type:* string

---

##### `City`<sup>Required</sup> <a name="City" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.city"></a>

```csharp
public string City { get; }
```

- *Type:* string

---

##### `Country`<sup>Required</sup> <a name="Country" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.country"></a>

```csharp
public string Country { get; }
```

- *Type:* string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.postalCode"></a>

```csharp
public string PostalCode { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `TcaLocationId`<sup>Required</sup> <a name="TcaLocationId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.tcaLocationId"></a>

```csharp
public string TcaLocationId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationOutputReference.property.internalValue"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocation InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocation">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocation</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.billSiteUseId">BillSiteUseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.isBillTo">IsBillTo</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.isShipTo">IsShipTo</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.location">Location</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.phone">Phone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.service2SiteUseId">Service2SiteUseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.tcaCustAcctSiteId">TcaCustAcctSiteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.tcaPartySiteNumber">TcaPartySiteNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddress">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BillSiteUseId`<sup>Required</sup> <a name="BillSiteUseId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.billSiteUseId"></a>

```csharp
public string BillSiteUseId { get; }
```

- *Type:* string

---

##### `IsBillTo`<sup>Required</sup> <a name="IsBillTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.isBillTo"></a>

```csharp
public IResolvable IsBillTo { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsShipTo`<sup>Required</sup> <a name="IsShipTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.isShipTo"></a>

```csharp
public IResolvable IsShipTo { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.location"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList Location { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressLocationList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Phone`<sup>Required</sup> <a name="Phone" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.phone"></a>

```csharp
public string Phone { get; }
```

- *Type:* string

---

##### `Service2SiteUseId`<sup>Required</sup> <a name="Service2SiteUseId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.service2SiteUseId"></a>

```csharp
public string Service2SiteUseId { get; }
```

- *Type:* string

---

##### `TcaCustAcctSiteId`<sup>Required</sup> <a name="TcaCustAcctSiteId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.tcaCustAcctSiteId"></a>

```csharp
public string TcaCustAcctSiteId { get; }
```

- *Type:* string

---

##### `TcaPartySiteNumber`<sup>Required</sup> <a name="TcaPartySiteNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.tcaPartySiteNumber"></a>

```csharp
public string TcaPartySiteNumber { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddressOutputReference.property.internalValue"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddress InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddress">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerAddress</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.get"></a>

```csharp
private DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.firstName">FirstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.lastName">LastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.tcaContactId">TcaContactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.tcaCustAccntSiteId">TcaCustAccntSiteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.tcaPartyId">TcaPartyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContact">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContact</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.firstName"></a>

```csharp
public string FirstName { get; }
```

- *Type:* string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.lastName"></a>

```csharp
public string LastName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TcaContactId`<sup>Required</sup> <a name="TcaContactId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.tcaContactId"></a>

```csharp
public string TcaContactId { get; }
```

- *Type:* string

---

##### `TcaCustAccntSiteId`<sup>Required</sup> <a name="TcaCustAccntSiteId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.tcaCustAccntSiteId"></a>

```csharp
public string TcaCustAccntSiteId { get; }
```

- *Type:* string

---

##### `TcaPartyId`<sup>Required</sup> <a name="TcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.tcaPartyId"></a>

```csharp
public string TcaPartyId { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContactOutputReference.property.internalValue"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContact InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContact">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerContact</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.get"></a>

```csharp
private DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.customerChainType">CustomerChainType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.isChainCustomer">IsChainCustomer</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.isPublicSector">IsPublicSector</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.namePhonetic">NamePhonetic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.tcaCustAccountNumber">TcaCustAccountNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.tcaCustomerAccountId">TcaCustomerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.tcaPartyId">TcaPartyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.tcaPartyNumber">TcaPartyNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomer">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomerChainType`<sup>Required</sup> <a name="CustomerChainType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.customerChainType"></a>

```csharp
public string CustomerChainType { get; }
```

- *Type:* string

---

##### `IsChainCustomer`<sup>Required</sup> <a name="IsChainCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.isChainCustomer"></a>

```csharp
public IResolvable IsChainCustomer { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsPublicSector`<sup>Required</sup> <a name="IsPublicSector" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.isPublicSector"></a>

```csharp
public IResolvable IsPublicSector { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamePhonetic`<sup>Required</sup> <a name="NamePhonetic" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.namePhonetic"></a>

```csharp
public string NamePhonetic { get; }
```

- *Type:* string

---

##### `TcaCustAccountNumber`<sup>Required</sup> <a name="TcaCustAccountNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.tcaCustAccountNumber"></a>

```csharp
public string TcaCustAccountNumber { get; }
```

- *Type:* string

---

##### `TcaCustomerAccountId`<sup>Required</sup> <a name="TcaCustomerAccountId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.tcaCustomerAccountId"></a>

```csharp
public string TcaCustomerAccountId { get; }
```

- *Type:* string

---

##### `TcaPartyId`<sup>Required</sup> <a name="TcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.tcaPartyId"></a>

```csharp
public string TcaPartyId { get; }
```

- *Type:* string

---

##### `TcaPartyNumber`<sup>Required</sup> <a name="TcaPartyNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.tcaPartyNumber"></a>

```csharp
public string TcaPartyNumber { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomerOutputReference.property.internalValue"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomer InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomer">DataOciOnesubscriptionSubscribedServicesSubscribedServicesResellerCustomer</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.get"></a>

```csharp
private DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.get"></a>

```csharp
private DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.address1">Address1</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.address2">Address2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.city">City</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.country">Country</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.postalCode">PostalCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.tcaLocationId">TcaLocationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocation">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Address1`<sup>Required</sup> <a name="Address1" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.address1"></a>

```csharp
public string Address1 { get; }
```

- *Type:* string

---

##### `Address2`<sup>Required</sup> <a name="Address2" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.address2"></a>

```csharp
public string Address2 { get; }
```

- *Type:* string

---

##### `City`<sup>Required</sup> <a name="City" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.city"></a>

```csharp
public string City { get; }
```

- *Type:* string

---

##### `Country`<sup>Required</sup> <a name="Country" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.country"></a>

```csharp
public string Country { get; }
```

- *Type:* string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.postalCode"></a>

```csharp
public string PostalCode { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `TcaLocationId`<sup>Required</sup> <a name="TcaLocationId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.tcaLocationId"></a>

```csharp
public string TcaLocationId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationOutputReference.property.internalValue"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocation InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocation">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocation</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.billSiteUseId">BillSiteUseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.isBillTo">IsBillTo</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.isShipTo">IsShipTo</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.location">Location</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.phone">Phone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.service2SiteUseId">Service2SiteUseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.tcaCustAcctSiteId">TcaCustAcctSiteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.tcaPartySiteNumber">TcaPartySiteNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddress">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BillSiteUseId`<sup>Required</sup> <a name="BillSiteUseId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.billSiteUseId"></a>

```csharp
public string BillSiteUseId { get; }
```

- *Type:* string

---

##### `IsBillTo`<sup>Required</sup> <a name="IsBillTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.isBillTo"></a>

```csharp
public IResolvable IsBillTo { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsShipTo`<sup>Required</sup> <a name="IsShipTo" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.isShipTo"></a>

```csharp
public IResolvable IsShipTo { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Location`<sup>Required</sup> <a name="Location" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.location"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList Location { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressLocationList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Phone`<sup>Required</sup> <a name="Phone" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.phone"></a>

```csharp
public string Phone { get; }
```

- *Type:* string

---

##### `Service2SiteUseId`<sup>Required</sup> <a name="Service2SiteUseId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.service2SiteUseId"></a>

```csharp
public string Service2SiteUseId { get; }
```

- *Type:* string

---

##### `TcaCustAcctSiteId`<sup>Required</sup> <a name="TcaCustAcctSiteId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.tcaCustAcctSiteId"></a>

```csharp
public string TcaCustAcctSiteId { get; }
```

- *Type:* string

---

##### `TcaPartySiteNumber`<sup>Required</sup> <a name="TcaPartySiteNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.tcaPartySiteNumber"></a>

```csharp
public string TcaPartySiteNumber { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddressOutputReference.property.internalValue"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddress InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddress">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToAddress</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.get"></a>

```csharp
private DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.firstName">FirstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.lastName">LastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.tcaContactId">TcaContactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.tcaCustAccntSiteId">TcaCustAccntSiteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.tcaPartyId">TcaPartyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContact">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContact</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.firstName"></a>

```csharp
public string FirstName { get; }
```

- *Type:* string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.lastName"></a>

```csharp
public string LastName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TcaContactId`<sup>Required</sup> <a name="TcaContactId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.tcaContactId"></a>

```csharp
public string TcaContactId { get; }
```

- *Type:* string

---

##### `TcaCustAccntSiteId`<sup>Required</sup> <a name="TcaCustAccntSiteId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.tcaCustAccntSiteId"></a>

```csharp
public string TcaCustAccntSiteId { get; }
```

- *Type:* string

---

##### `TcaPartyId`<sup>Required</sup> <a name="TcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.tcaPartyId"></a>

```csharp
public string TcaPartyId { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContactOutputReference.property.internalValue"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContact InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContact">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToContact</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.get"></a>

```csharp
private DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.customerChainType">CustomerChainType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.isChainCustomer">IsChainCustomer</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.isPublicSector">IsPublicSector</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.namePhonetic">NamePhonetic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.tcaCustAccountNumber">TcaCustAccountNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.tcaCustomerAccountId">TcaCustomerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.tcaPartyId">TcaPartyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.tcaPartyNumber">TcaPartyNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomer">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomerChainType`<sup>Required</sup> <a name="CustomerChainType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.customerChainType"></a>

```csharp
public string CustomerChainType { get; }
```

- *Type:* string

---

##### `IsChainCustomer`<sup>Required</sup> <a name="IsChainCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.isChainCustomer"></a>

```csharp
public IResolvable IsChainCustomer { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsPublicSector`<sup>Required</sup> <a name="IsPublicSector" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.isPublicSector"></a>

```csharp
public IResolvable IsPublicSector { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamePhonetic`<sup>Required</sup> <a name="NamePhonetic" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.namePhonetic"></a>

```csharp
public string NamePhonetic { get; }
```

- *Type:* string

---

##### `TcaCustAccountNumber`<sup>Required</sup> <a name="TcaCustAccountNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.tcaCustAccountNumber"></a>

```csharp
public string TcaCustAccountNumber { get; }
```

- *Type:* string

---

##### `TcaCustomerAccountId`<sup>Required</sup> <a name="TcaCustomerAccountId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.tcaCustomerAccountId"></a>

```csharp
public string TcaCustomerAccountId { get; }
```

- *Type:* string

---

##### `TcaPartyId`<sup>Required</sup> <a name="TcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.tcaPartyId"></a>

```csharp
public string TcaPartyId { get; }
```

- *Type:* string

---

##### `TcaPartyNumber`<sup>Required</sup> <a name="TcaPartyNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.tcaPartyNumber"></a>

```csharp
public string TcaPartyNumber { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomerOutputReference.property.internalValue"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomer InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomer">DataOciOnesubscriptionSubscribedServicesSubscribedServicesServiceToCustomer</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.get"></a>

```csharp
private DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.firstName">FirstName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.lastName">LastName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.tcaContactId">TcaContactId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.tcaCustAccntSiteId">TcaCustAccntSiteId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.tcaPartyId">TcaPartyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContact">DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContact</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.firstName"></a>

```csharp
public string FirstName { get; }
```

- *Type:* string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.lastName"></a>

```csharp
public string LastName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TcaContactId`<sup>Required</sup> <a name="TcaContactId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.tcaContactId"></a>

```csharp
public string TcaContactId { get; }
```

- *Type:* string

---

##### `TcaCustAccntSiteId`<sup>Required</sup> <a name="TcaCustAccntSiteId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.tcaCustAccntSiteId"></a>

```csharp
public string TcaCustAccntSiteId { get; }
```

- *Type:* string

---

##### `TcaPartyId`<sup>Required</sup> <a name="TcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.tcaPartyId"></a>

```csharp
public string TcaPartyId { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContactOutputReference.property.internalValue"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContact InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContact">DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToContact</a>

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.get"></a>

```csharp
private DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference <a name="DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.customerChainType">CustomerChainType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.isChainCustomer">IsChainCustomer</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.isPublicSector">IsPublicSector</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.namePhonetic">NamePhonetic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.tcaCustAccountNumber">TcaCustAccountNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.tcaCustomerAccountId">TcaCustomerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.tcaPartyId">TcaPartyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.tcaPartyNumber">TcaPartyNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomer">DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomer</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CustomerChainType`<sup>Required</sup> <a name="CustomerChainType" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.customerChainType"></a>

```csharp
public string CustomerChainType { get; }
```

- *Type:* string

---

##### `IsChainCustomer`<sup>Required</sup> <a name="IsChainCustomer" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.isChainCustomer"></a>

```csharp
public IResolvable IsChainCustomer { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `IsPublicSector`<sup>Required</sup> <a name="IsPublicSector" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.isPublicSector"></a>

```csharp
public IResolvable IsPublicSector { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NamePhonetic`<sup>Required</sup> <a name="NamePhonetic" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.namePhonetic"></a>

```csharp
public string NamePhonetic { get; }
```

- *Type:* string

---

##### `TcaCustAccountNumber`<sup>Required</sup> <a name="TcaCustAccountNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.tcaCustAccountNumber"></a>

```csharp
public string TcaCustAccountNumber { get; }
```

- *Type:* string

---

##### `TcaCustomerAccountId`<sup>Required</sup> <a name="TcaCustomerAccountId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.tcaCustomerAccountId"></a>

```csharp
public string TcaCustomerAccountId { get; }
```

- *Type:* string

---

##### `TcaPartyId`<sup>Required</sup> <a name="TcaPartyId" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.tcaPartyId"></a>

```csharp
public string TcaPartyId { get; }
```

- *Type:* string

---

##### `TcaPartyNumber`<sup>Required</sup> <a name="TcaPartyNumber" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.tcaPartyNumber"></a>

```csharp
public string TcaPartyNumber { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomerOutputReference.property.internalValue"></a>

```csharp
public DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomer InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOnesubscriptionSubscribedServices.DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomer">DataOciOnesubscriptionSubscribedServicesSubscribedServicesSoldToCustomer</a>

---



