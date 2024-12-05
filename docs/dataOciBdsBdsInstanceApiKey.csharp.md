# `dataOciBdsBdsInstanceApiKey` Submodule <a name="`dataOciBdsBdsInstanceApiKey` Submodule" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciBdsBdsInstanceApiKey <a name="DataOciBdsBdsInstanceApiKey" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_api_key oci_bds_bds_instance_api_key}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsBdsInstanceApiKey(Construct Scope, string Id, DataOciBdsBdsInstanceApiKeyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKeyConfig">DataOciBdsBdsInstanceApiKeyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKeyConfig">DataOciBdsBdsInstanceApiKeyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciBdsBdsInstanceApiKey resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciBdsBdsInstanceApiKey.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciBdsBdsInstanceApiKey.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciBdsBdsInstanceApiKey.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciBdsBdsInstanceApiKey.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciBdsBdsInstanceApiKey resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciBdsBdsInstanceApiKey to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciBdsBdsInstanceApiKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_api_key#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciBdsBdsInstanceApiKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.defaultRegion">DefaultRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.fingerprint">Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.keyAlias">KeyAlias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.passphrase">Passphrase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.pemfilepath">Pemfilepath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.tenantId">TenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.userId">UserId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.apiKeyIdInput">ApiKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.bdsInstanceIdInput">BdsInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.apiKeyId">ApiKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.bdsInstanceId">BdsInstanceId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DefaultRegion`<sup>Required</sup> <a name="DefaultRegion" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.defaultRegion"></a>

```csharp
public string DefaultRegion { get; }
```

- *Type:* string

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.fingerprint"></a>

```csharp
public string Fingerprint { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KeyAlias`<sup>Required</sup> <a name="KeyAlias" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.keyAlias"></a>

```csharp
public string KeyAlias { get; }
```

- *Type:* string

---

##### `Passphrase`<sup>Required</sup> <a name="Passphrase" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.passphrase"></a>

```csharp
public string Passphrase { get; }
```

- *Type:* string

---

##### `Pemfilepath`<sup>Required</sup> <a name="Pemfilepath" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.pemfilepath"></a>

```csharp
public string Pemfilepath { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.tenantId"></a>

```csharp
public string TenantId { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `UserId`<sup>Required</sup> <a name="UserId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.userId"></a>

```csharp
public string UserId { get; }
```

- *Type:* string

---

##### `ApiKeyIdInput`<sup>Optional</sup> <a name="ApiKeyIdInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.apiKeyIdInput"></a>

```csharp
public string ApiKeyIdInput { get; }
```

- *Type:* string

---

##### `BdsInstanceIdInput`<sup>Optional</sup> <a name="BdsInstanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.bdsInstanceIdInput"></a>

```csharp
public string BdsInstanceIdInput { get; }
```

- *Type:* string

---

##### `ApiKeyId`<sup>Required</sup> <a name="ApiKeyId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.apiKeyId"></a>

```csharp
public string ApiKeyId { get; }
```

- *Type:* string

---

##### `BdsInstanceId`<sup>Required</sup> <a name="BdsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.bdsInstanceId"></a>

```csharp
public string BdsInstanceId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKey.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciBdsBdsInstanceApiKeyConfig <a name="DataOciBdsBdsInstanceApiKeyConfig" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKeyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciBdsBdsInstanceApiKeyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ApiKeyId,
    string BdsInstanceId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKeyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKeyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKeyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKeyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKeyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKeyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKeyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKeyConfig.property.apiKeyId">ApiKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_api_key#api_key_id DataOciBdsBdsInstanceApiKey#api_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKeyConfig.property.bdsInstanceId">BdsInstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_api_key#bds_instance_id DataOciBdsBdsInstanceApiKey#bds_instance_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKeyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKeyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKeyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKeyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKeyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKeyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKeyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApiKeyId`<sup>Required</sup> <a name="ApiKeyId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKeyConfig.property.apiKeyId"></a>

```csharp
public string ApiKeyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_api_key#api_key_id DataOciBdsBdsInstanceApiKey#api_key_id}.

---

##### `BdsInstanceId`<sup>Required</sup> <a name="BdsInstanceId" id="rhizo-co-terraform-provider-oci.dataOciBdsBdsInstanceApiKey.DataOciBdsBdsInstanceApiKeyConfig.property.bdsInstanceId"></a>

```csharp
public string BdsInstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/bds_bds_instance_api_key#bds_instance_id DataOciBdsBdsInstanceApiKey#bds_instance_id}.

---



