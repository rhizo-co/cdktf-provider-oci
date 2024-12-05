# `dataOciObjectstorageObjectLifecyclePolicy` Submodule <a name="`dataOciObjectstorageObjectLifecyclePolicy` Submodule" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciObjectstorageObjectLifecyclePolicy <a name="DataOciObjectstorageObjectLifecyclePolicy" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object_lifecycle_policy oci_objectstorage_object_lifecycle_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciObjectstorageObjectLifecyclePolicy(Construct Scope, string Id, DataOciObjectstorageObjectLifecyclePolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyConfig">DataOciObjectstorageObjectLifecyclePolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyConfig">DataOciObjectstorageObjectLifecyclePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciObjectstorageObjectLifecyclePolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciObjectstorageObjectLifecyclePolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciObjectstorageObjectLifecyclePolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciObjectstorageObjectLifecyclePolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciObjectstorageObjectLifecyclePolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciObjectstorageObjectLifecyclePolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciObjectstorageObjectLifecyclePolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciObjectstorageObjectLifecyclePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object_lifecycle_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciObjectstorageObjectLifecyclePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.rules">Rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList">DataOciObjectstorageObjectLifecyclePolicyRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.rules"></a>

```csharp
public DataOciObjectstorageObjectLifecyclePolicyRulesList Rules { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList">DataOciObjectstorageObjectLifecyclePolicyRulesList</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciObjectstorageObjectLifecyclePolicyConfig <a name="DataOciObjectstorageObjectLifecyclePolicyConfig" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciObjectstorageObjectLifecyclePolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Bucket,
    string Namespace
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyConfig.property.bucket">Bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object_lifecycle_policy#bucket DataOciObjectstorageObjectLifecyclePolicy#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyConfig.property.namespace">Namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object_lifecycle_policy#namespace DataOciObjectstorageObjectLifecyclePolicy#namespace}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object_lifecycle_policy#bucket DataOciObjectstorageObjectLifecyclePolicy#bucket}.

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyConfig.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/objectstorage_object_lifecycle_policy#namespace DataOciObjectstorageObjectLifecyclePolicy#namespace}.

---

### DataOciObjectstorageObjectLifecyclePolicyRules <a name="DataOciObjectstorageObjectLifecyclePolicyRules" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRules.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciObjectstorageObjectLifecyclePolicyRules {

};
```


### DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilter <a name="DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilter" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilter {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciObjectstorageObjectLifecyclePolicyRulesList <a name="DataOciObjectstorageObjectLifecyclePolicyRulesList" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciObjectstorageObjectLifecyclePolicyRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList.get"></a>

```csharp
private DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList <a name="DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList.get"></a>

```csharp
private DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference <a name="DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.exclusionPatterns">ExclusionPatterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.inclusionPatterns">InclusionPatterns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.inclusionPrefixes">InclusionPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilter">DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExclusionPatterns`<sup>Required</sup> <a name="ExclusionPatterns" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.exclusionPatterns"></a>

```csharp
public string[] ExclusionPatterns { get; }
```

- *Type:* string[]

---

##### `InclusionPatterns`<sup>Required</sup> <a name="InclusionPatterns" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.inclusionPatterns"></a>

```csharp
public string[] InclusionPatterns { get; }
```

- *Type:* string[]

---

##### `InclusionPrefixes`<sup>Required</sup> <a name="InclusionPrefixes" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.inclusionPrefixes"></a>

```csharp
public string[] InclusionPrefixes { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterOutputReference.property.internalValue"></a>

```csharp
public DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilter InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilter">DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilter</a>

---


### DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference <a name="DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.property.isEnabled">IsEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.property.objectNameFilter">ObjectNameFilter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList">DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.property.target">Target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.property.timeAmount">TimeAmount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.property.timeUnit">TimeUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRules">DataOciObjectstorageObjectLifecyclePolicyRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.property.isEnabled"></a>

```csharp
public IResolvable IsEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ObjectNameFilter`<sup>Required</sup> <a name="ObjectNameFilter" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.property.objectNameFilter"></a>

```csharp
public DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList ObjectNameFilter { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList">DataOciObjectstorageObjectLifecyclePolicyRulesObjectNameFilterList</a>

---

##### `Target`<sup>Required</sup> <a name="Target" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

##### `TimeAmount`<sup>Required</sup> <a name="TimeAmount" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.property.timeAmount"></a>

```csharp
public string TimeAmount { get; }
```

- *Type:* string

---

##### `TimeUnit`<sup>Required</sup> <a name="TimeUnit" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.property.timeUnit"></a>

```csharp
public string TimeUnit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRulesOutputReference.property.internalValue"></a>

```csharp
public DataOciObjectstorageObjectLifecyclePolicyRules InternalValue { get; }
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciObjectstorageObjectLifecyclePolicy.DataOciObjectstorageObjectLifecyclePolicyRules">DataOciObjectstorageObjectLifecyclePolicyRules</a>

---



