# `dataOciCoreFastConnectProviderService` Submodule <a name="`dataOciCoreFastConnectProviderService` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreFastConnectProviderService <a name="DataOciCoreFastConnectProviderService" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_fast_connect_provider_service oci_core_fast_connect_provider_service}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreFastConnectProviderService(Construct Scope, string Id, DataOciCoreFastConnectProviderServiceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderServiceConfig">DataOciCoreFastConnectProviderServiceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderServiceConfig">DataOciCoreFastConnectProviderServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreFastConnectProviderService resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreFastConnectProviderService.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreFastConnectProviderService.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreFastConnectProviderService.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCoreFastConnectProviderService.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciCoreFastConnectProviderService resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCoreFastConnectProviderService to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCoreFastConnectProviderService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_fast_connect_provider_service#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreFastConnectProviderService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.bandwithShapeManagement">BandwithShapeManagement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.customerAsnManagement">CustomerAsnManagement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.privatePeeringBgpManagement">PrivatePeeringBgpManagement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.providerName">ProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.providerServiceKeyManagement">ProviderServiceKeyManagement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.providerServiceName">ProviderServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.publicPeeringBgpManagement">PublicPeeringBgpManagement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.requiredTotalCrossConnects">RequiredTotalCrossConnects</a></code> | <code>double</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.supportedVirtualCircuitTypes">SupportedVirtualCircuitTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.providerServiceIdInput">ProviderServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.providerServiceId">ProviderServiceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `BandwithShapeManagement`<sup>Required</sup> <a name="BandwithShapeManagement" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.bandwithShapeManagement"></a>

```csharp
public string BandwithShapeManagement { get; }
```

- *Type:* string

---

##### `CustomerAsnManagement`<sup>Required</sup> <a name="CustomerAsnManagement" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.customerAsnManagement"></a>

```csharp
public string CustomerAsnManagement { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `PrivatePeeringBgpManagement`<sup>Required</sup> <a name="PrivatePeeringBgpManagement" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.privatePeeringBgpManagement"></a>

```csharp
public string PrivatePeeringBgpManagement { get; }
```

- *Type:* string

---

##### `ProviderName`<sup>Required</sup> <a name="ProviderName" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.providerName"></a>

```csharp
public string ProviderName { get; }
```

- *Type:* string

---

##### `ProviderServiceKeyManagement`<sup>Required</sup> <a name="ProviderServiceKeyManagement" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.providerServiceKeyManagement"></a>

```csharp
public string ProviderServiceKeyManagement { get; }
```

- *Type:* string

---

##### `ProviderServiceName`<sup>Required</sup> <a name="ProviderServiceName" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.providerServiceName"></a>

```csharp
public string ProviderServiceName { get; }
```

- *Type:* string

---

##### `PublicPeeringBgpManagement`<sup>Required</sup> <a name="PublicPeeringBgpManagement" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.publicPeeringBgpManagement"></a>

```csharp
public string PublicPeeringBgpManagement { get; }
```

- *Type:* string

---

##### `RequiredTotalCrossConnects`<sup>Required</sup> <a name="RequiredTotalCrossConnects" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.requiredTotalCrossConnects"></a>

```csharp
public double RequiredTotalCrossConnects { get; }
```

- *Type:* double

---

##### `SupportedVirtualCircuitTypes`<sup>Required</sup> <a name="SupportedVirtualCircuitTypes" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.supportedVirtualCircuitTypes"></a>

```csharp
public string[] SupportedVirtualCircuitTypes { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProviderServiceIdInput`<sup>Optional</sup> <a name="ProviderServiceIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.providerServiceIdInput"></a>

```csharp
public string ProviderServiceIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ProviderServiceId`<sup>Required</sup> <a name="ProviderServiceId" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.providerServiceId"></a>

```csharp
public string ProviderServiceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderService.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreFastConnectProviderServiceConfig <a name="DataOciCoreFastConnectProviderServiceConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderServiceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderServiceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCoreFastConnectProviderServiceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ProviderServiceId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderServiceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderServiceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderServiceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderServiceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderServiceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderServiceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderServiceConfig.property.providerServiceId">ProviderServiceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_fast_connect_provider_service#provider_service_id DataOciCoreFastConnectProviderService#provider_service_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderServiceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_fast_connect_provider_service#id DataOciCoreFastConnectProviderService#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderServiceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderServiceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderServiceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderServiceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderServiceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderServiceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderServiceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ProviderServiceId`<sup>Required</sup> <a name="ProviderServiceId" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderServiceConfig.property.providerServiceId"></a>

```csharp
public string ProviderServiceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_fast_connect_provider_service#provider_service_id DataOciCoreFastConnectProviderService#provider_service_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreFastConnectProviderService.DataOciCoreFastConnectProviderServiceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_fast_connect_provider_service#id DataOciCoreFastConnectProviderService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



