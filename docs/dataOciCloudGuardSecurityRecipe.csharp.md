# `dataOciCloudGuardSecurityRecipe` Submodule <a name="`dataOciCloudGuardSecurityRecipe` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudGuardSecurityRecipe <a name="DataOciCloudGuardSecurityRecipe" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_recipe oci_cloud_guard_security_recipe}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardSecurityRecipe(Construct Scope, string Id, DataOciCloudGuardSecurityRecipeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.Initializer.parameter.config">Config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipeConfig">DataOciCloudGuardSecurityRecipeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipeConfig">DataOciCloudGuardSecurityRecipeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCloudGuardSecurityRecipe resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCloudGuardSecurityRecipe.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCloudGuardSecurityRecipe.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCloudGuardSecurityRecipe.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

DataOciCloudGuardSecurityRecipe.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOciCloudGuardSecurityRecipe resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOciCloudGuardSecurityRecipe to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOciCloudGuardSecurityRecipe that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_recipe#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudGuardSecurityRecipe to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.compartmentId">CompartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.definedTags">DefinedTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.freeformTags">FreeformTags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.lifecycleDetails">LifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.owner">Owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.securityPolicies">SecurityPolicies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.timeCreated">TimeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.timeUpdated">TimeUpdated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.securityRecipeIdInput">SecurityRecipeIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.securityRecipeId">SecurityRecipeId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.compartmentId"></a>

```csharp
public string CompartmentId { get; }
```

- *Type:* string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.definedTags"></a>

```csharp
public StringMap DefinedTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.freeformTags"></a>

```csharp
public StringMap FreeformTags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.lifecycleDetails"></a>

```csharp
public string LifecycleDetails { get; }
```

- *Type:* string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.owner"></a>

```csharp
public string Owner { get; }
```

- *Type:* string

---

##### `SecurityPolicies`<sup>Required</sup> <a name="SecurityPolicies" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.securityPolicies"></a>

```csharp
public string[] SecurityPolicies { get; }
```

- *Type:* string[]

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.timeCreated"></a>

```csharp
public string TimeCreated { get; }
```

- *Type:* string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.timeUpdated"></a>

```csharp
public string TimeUpdated { get; }
```

- *Type:* string

---

##### `SecurityRecipeIdInput`<sup>Optional</sup> <a name="SecurityRecipeIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.securityRecipeIdInput"></a>

```csharp
public string SecurityRecipeIdInput { get; }
```

- *Type:* string

---

##### `SecurityRecipeId`<sup>Required</sup> <a name="SecurityRecipeId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.securityRecipeId"></a>

```csharp
public string SecurityRecipeId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipe.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudGuardSecurityRecipeConfig <a name="DataOciCloudGuardSecurityRecipeConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Oci;

new DataOciCloudGuardSecurityRecipeConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string SecurityRecipeId
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipeConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipeConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipeConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipeConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipeConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipeConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipeConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipeConfig.property.securityRecipeId">SecurityRecipeId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_recipe#security_recipe_id DataOciCloudGuardSecurityRecipe#security_recipe_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipeConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipeConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipeConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `SecurityRecipeId`<sup>Required</sup> <a name="SecurityRecipeId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardSecurityRecipe.DataOciCloudGuardSecurityRecipeConfig.property.securityRecipeId"></a>

```csharp
public string SecurityRecipeId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_security_recipe#security_recipe_id DataOciCloudGuardSecurityRecipe#security_recipe_id}.

---


